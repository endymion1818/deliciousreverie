import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Container from './Container'

describe('<Container />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Container />)
    expect(container).toMatchSnapshot()
  })
})
