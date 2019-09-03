import React from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { reducer, initialState } from './state/createStore'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
const renderWithRedux = (
  ui,
  {
    overwriteInitialState,
    store = createStore(reducer, overwriteInitialState || initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  // adding `store` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  store,
})

export default renderWithRedux
