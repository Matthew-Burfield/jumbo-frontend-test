import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  // if (action.type === `INCREMENT`) {
  //   return Object.assign({}, state, {
  //     count: state.count + 1,
  //   })
  // }
  // return state
  switch (action.type) {
    case 'SAVE_MOVIES': {
      const movies =
        action.payload.lastPage === 1
          ? action.payload.movies
          : [...state.movies, ...action.payload.movies]
      return Object.assign({}, state, {
        movies,
        lastPage: action.payload.lastPage,
      })
    }
    case 'SEARCH': {
      return Object.assign({}, state, {
        searchTerm: action.payload,
      })
    }
    case 'NEXT_PAGE': {
      return Object.assign({}, state, {
        lastPage: state.lastPage + 1,
      })
    }
    default: {
      return state
    }
  }
}

const initialState = {
  movies: [],
  searchTerm: '',
  lastFetchedPage: 0,
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
