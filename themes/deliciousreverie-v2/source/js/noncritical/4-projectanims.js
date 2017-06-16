window.onload = function(){

  // smController = new ScrollMagic.Controller();
  smTreeController = new ScrollMagic.Controller();
  smRabbitController = new ScrollMagic.Controller();

  // getters
  var trigger = document.getElementById('main');

  var treeSummer = document.getElementById('tree-summer');
  var treeWinter = document.getElementById('tree-winter');

  var rabbit0 = document.getElementById('rabbit-0');
  var rabbit1 = document.getElementById('rabbit-1');
  var rabbit3 = document.getElementById('rabbit-3');
  var rabbit4 = document.getElementById('rabbit-4');
  var rabbit5 = document.getElementById('rabbit-5');
  var rabbit6 = document.getElementById('rabbit-6');
  var rabbit8 = document.getElementById('rabbit-8');

  // from winter to summer
  var treeWinterToSummer1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: '100%',
    offset: '400%'
  })
  .setTween(treeSummer, { opacity: 0.6 })
  .addTo(smTreeController);

  var treeWinterToSummer2 = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: '100%',
    offset: '500%'
  })
  .setTween(treeWinter, { opacity: 0 })
  .addTo(smTreeController);

  // 0
  var heyRabbit0 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '500%',
    duration: '15%'
  })
  .setTween(rabbit0, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit0 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '600%',
    duration: '15%'
  })
  .setTween(rabbit0, { opacity: 0 })
  .addTo(smRabbitController);

  // 1
  var heyRabbit1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '650%',
    duration: '15%'
  })
  .setTween(rabbit1, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '750%',
    duration: '15%'
  })
  .setTween(rabbit1, { opacity: 0 })
  .addTo(smRabbitController);

  // 2
  var heyRabbit3 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '800%',
    duration: '15%'
  })
  .setTween(rabbit3, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit3 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '950%',
    duration: '15%'
  })
  .setTween(rabbit3, { opacity: 0 })
  .addTo(smRabbitController);

  var heyRabbit4 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '1000%',
    duration: '15%'
  })
  .setTween(rabbit4, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit4 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '1050%',
    duration: '15%'
  })
  .setTween(rabbit4, { opacity: 0 })
  .addTo(smRabbitController);


  // 3
  var heyRabbit5 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '1050%',
    duration: '15%'
  })
  .setTween(rabbit5, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit5 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '2000%',
    duration: '15%'
  })
  .setTween(rabbit5, { opacity: 0 })
  .addTo(smRabbitController);

  // 4
  var heyRabbit6 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '2300%',
    duration: '30%'
  })
  .setTween(rabbit6, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit6 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '2350%',
    duration: '30%'
  })
  .setTween(rabbit6, { opacity: 0 })
  .addTo(smRabbitController);


  // 5
  var heyRabbit8 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '2400%',
    duration: '15%'
  })
  .setTween(rabbit8, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit8 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '2425%',
    duration: '15%'
  })
  .setTween(rabbit8, { opacity: 0 })
  .addTo(smRabbitController);

};
