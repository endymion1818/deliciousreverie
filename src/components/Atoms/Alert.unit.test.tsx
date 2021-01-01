import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Alert from './Alert'

describe('<Alert />', () => {
  beforeEach(cleanup)
  it('Should render', () => {
    const { container } = render(<Alert />)
    expect(container).toMatchSnapshot()
  })
})
