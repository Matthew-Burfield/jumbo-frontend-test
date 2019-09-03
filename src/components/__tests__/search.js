import React from 'react'
import renderWithRedux from '../../jest.helpers'
import { initialState } from '../../state/createStore'
import Search from '../search'

describe('Search', () => {
  it('renders correctly', () => {
    const { container } = renderWithRedux(<Search />)
    expect(container).toMatchSnapshot()
  })

  it('correctly defaults to previously searched term', () => {
    const { container } = renderWithRedux(<Search />, {
      overwriteInitialState: { ...initialState, searchTerm: 'The Lion King' },
    })
    expect(container).toMatchSnapshot()
  })
})
