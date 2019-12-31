---
categories:
- development
date: "2018-01-09T15:21:21+01:00"
description: Whilst simultaneously trying to decide what to build in Laravel and considering
  an old system we had recently inherited, I realised that I _liked_ looking at the
  spaghetti code, and was comparatively _scared_ of the shiny, new, empty Laravel
  installation I had just set up. Here's how I dealt with my first few tasks and began
  strategising how we could protect our clients' investment going forward.
draft: false
tags:
- php
title: Maintaining a Legacy PHP Codebase
---
Whilst simultaneously trying to decide what to build in Laravel and considering an old, 4GB spaghetti code monster site that I'd been given, I came to a bit of a realisation.

I realised that I _liked_ looking at the spaghetti code, and was comparatively _scared_ of the shiny, new, empty Laravel installation I had just set up.

The thing with a new project is that I can never decide where to start. Because you've got to make such important decisions that will affect the rest of the project upfront, I often feel a little nervous that I'm going to make a wrong choice.

But the spaghetti code had _already made the choices_, and I was there to fix the wrong ones!

This massive jumble of code provided the following functions for our client:

- A front-of-house content-driven site for their organisation
- A blogging platform with hundreds (~200) of sub-blogs
- A membership platform
- An events platform
- A self-hosted podcast
- An eCommerce bookshop
- Probably other stuff too

The site seems to have grown organically from a Perch 2.x CMS, with the developer initially using the Perch templating system, then eventually abandoning that entirely. I noticed this because some of the site is using a header.php layout partial, but other areas the partial has been copied & pasted wholesale into a page. They have started using the Members add-on for Perch, but it has been customised into a bit of a monster. I think this is likely trying to meet client requirements that were added on after they realised their requirements had outgrown what the Members add-on could achieve.

Over the past few months I have been tasked with the following:

1. Move the domain to HTTPS
2. Version control the 4GB behemoth
3. Install Stripe payments on their membership system, a custom PHP Database object
4. Add Stripe subscriptions to one membership area
5. Come up with a strategy to shard or separate the server to mitigate potential downtime & data loss

## Task 1: Move the primary domain to HTTPS

After I worked out a regexp we could use with a RewriteRule on the domain (`RewriteRule ^(.*)$ https://www.domain.com/$1 [R,L]`) and then did a regex search through the code, changing all references to JavaScript files from HTTP to HTTPS, I started working out a version control strategy.

## Task 2: Version Control

My initial plan for version control was to download a .zip of the whole site, stick it in a git repo, and send it up to BitBucket.

There were 2 issues with this strategy. Firstly, downloading 4GB of content isn't easy. Several times the zip was malformed and I couldn't use it.

I poked around the code until I found that actually there was an old .git directory that took up a lot of space, as well as old zip files that had been left on the server, and over 500MB worth of audio files (their podcasts) and other content that I decided could be backed up another way.

I then downloaded the root directory separate from their blog (a WordPress multisite install), which became more manageable.

Using Git submodules in a similar way, I was able to get 2 repos that I wasn't locked out of adding to or editing by BitBucket's 2GB limit.

## Task 3: Stripe Payments

As I mentioned, this site was a legacy system, running PHP 5.3, and though we want to modernise it, this is part of separate task. For that reason, I elected not to use Composer or Autoloader on this fragile, live site, and instead to pull in the Stripe library manually. However I still located this in a `/vendor/` folder in the root directory so that it was hopefully obvious to others.

The first step was to modify an existing page to add the Stripe payment, which I did by following along with the Stripe docs, which are amazingly clear and easy to follow.

I elected to redirect after Stripe's card verification process, rather than modify the display message in this page. I wanted to ensure that in the future, if they chose to monitor success/failure rates by adding analytics tracking, they could do that easily.

### Protecting the Private Key

In order to protect the customers' Stripe private key from anyone who gains access to the git repo, I added a `config.php` file that is gitignored, and stored the private key there.

I noticed that Laravel uses the `env` file for a similar purpose, thereby protecting sensitive data that might otherwise be compromised.

The other thing that got me about Stripe is that it charges in pence for everything (no decimals), so £100.00 becomes 10000 pence (£10). I got around this in this instance by the simple formula `$stripe_fee = ($fee*100);`. At this level, it works, however if the payments get any more complicated than they are, or if they start to offer more currencies, I realise I'm going to have to refactor that.

## Task 4: Stripe Subscriptions

My task on subscriptions was made easier by the fact that there was a predefined Plan (to which customers could subscribe) already set up in Stripe.

For this I needed to add an option onto their form to allow them to pay the full fee for a certain membership tier either in advance, or on a yearly subscription.

The thing that got me was a slight discrepancy in the documentation, which seems to indicate that you can submit the string of the plan name in order for it to be recognised and assigned by stripe. This isn't the case. You need to find the Stripe ID (an integer) of that plan, and assign the plan to that int at your end.

As we only had one plan, and we were running out of time, I used an `if` statement instead of mapping the data at this stage.

Here's my code for the page you're redirected to on Stripe success (because sometimes it's harder to explain code than actually show it):

```php
<?php
// Stripe library
require_once($_SERVER['DOCUMENT_ROOT'] . '/vendor/stripe-php-5.7.0/init.php');
// private token (so that its not available if the repo becomes compromised)
include($_SERVER['DOCUMENT_ROOT'] . '/common/config.php');

	// Set API key
	\Stripe\Stripe::setApiKey($stripe_key_private);

    // Get data from the headers
	$token = $_POST['stripeToken'];
	$email = $_POST['stripeEmail'];
	$price = $_POST['price'];
	$plan = '' ?: $_POST['plan'];

    // Plans - only one at this stage
	if($plan == 'plan1') {
		$plan = 1;
	};

	if(empty($token)) {
		$issue = '<p>Token not found, please contact Membership Support</p>';
	}
	if(empty($plan)) {
		try {
				$customer = \Stripe\Customer::create([
						'email' => $email,
						'source'  => $token
				]);
				$charge = \Stripe\Charge::create([
						'customer' => $customer->id,
						'amount' => $price,
						'currency' => 'gbp'
				]);
		} catch (Exception $e) {
				$issue = $e->getMessage();
		}
	}
	else {
		try {
				$customer = \Stripe\Customer::create([
						'email' => $email,
						'source'  => $token
				]);
				// \Stripe\Charge is not needed on subscriptions as the first payment has been set up to be taken immediately
				$subscription = \Stripe\Subscription::create(array(
					"customer" => $customer->id,
					"items" => array(
						array(
							"plan" => $plan,
						),
					),
				));
		} catch (Exception $e) {
        		// output the error message on the page
				$issue = $e->getMessage();
		}
	}
```
The subscriptions system has launched after testing using Stripe's very easy to use test system, and is proving to be a much better way for users to join and manage their memberships.

## Task 5: Protecting the Server

As it stands, the one server is buckling under the heavy load of several custom PDOs, a Perch site, a massive WordPress multisite, and probably more stuff we don't know about. The server is used by several TLDs and subdomains, and content is edited by users at the firm directly on the server using DreamWeaver ... with no source control.

I probably don't need to tell you this is a recipe for disaster.

My plan though is not to change everything at once. I believe the client would consider that too much of a risk, and it would also be difficult to manage in one go.

**Step 1:** I recommended that we start by moving the WordPress multisite off onto some managed hosting so that it's isolated from the rest of the codebase.

**Step 2:** Then I suggested that we purchase a managed server for the rest of it, so that backups could be taken daily (or preferably hourly) and the client could have more peace of mind, that we can start work on upgrading to PHP 7.1, begin to use Composer, and we can have a staging environment or A/B testing to work and deploy from after testing.

**Step 3** Would be to find some way to train staff on using basic git commands so that they are able to save their work, further mitigating risk and helping them to have a way to rollback portions of the site quickly if needed.

These steps address the core concerns I have, but this doesn't address the spaghetti code issue with the site. At the moment, it's impossible to tell what's really going on because everything is written procedurally, with no higher functions or object-oriented structure to the code. So that would be the next - and biggest - step of all!

I must be some kind of masochist to say that I would really love the chance, given the investment, to restructure parts of the code gradually over time.

However, I do find it such a satisfying task to improve on something like this, that is being used by probably hundreds of people, so that it's easier for them, and protects our clients' investment for years to come.
