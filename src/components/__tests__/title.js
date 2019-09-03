import React from 'react'
import { render } from '@testing-library/react'
import Title from '../title'
describe('Title', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Title searchTerm="" />)
    expect(container).toMatchSnapshot()
    expect(getByText('Popular')).toBeTruthy()
  })

  it('updates the title after having searched for a new movie', () => {
    const { container, getByText } = render(
      <Title searchTerm="The Lion King" />
    )
    expect(container).toMatchSnapshot()
    expect(getByText('Results: The Lion King')).toBeTruthy()
  })
})
