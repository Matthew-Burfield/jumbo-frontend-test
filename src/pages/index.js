import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Movies from '../components/movies'
import Search from '../components/search'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff'

const isPopular = searchTerm => searchTerm === ''

const getUrl = (searchTerm, page) =>
  `${BASE_URL}${
    isPopular(searchTerm) ? 'movie/popular' : 'search/movie'
  }?api_key=${API_KEY}${
    isPopular(searchTerm) ? '' : `&query=${searchTerm}`
  }&language=en-US&include_adult=false&page=${page}`

const IndexPage = ({ searchTerm, movies, lastFetchedPage, saveMovies }) => {
  const fetchData = async () => {
    const pageToFetch = lastFetchedPage + 1
    const { data } = await axios.get(getUrl(searchTerm, pageToFetch))
    saveMovies(data.results, pageToFetch)
  }
  const loadNextPage = () => {
    fetchData()
  }
  useEffect(() => {
    if (!movies.length) {
      fetchData()
    }
  }, [])
  return (
    <Layout showHeader>
      <SEO title="Home" />
      <Search onSearch={fetchData} />
      <Movies movies={movies} />
      <button onClick={loadNextPage}>Load more</button>
    </Layout>
  )
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  lastFetchedPage: state.lastFetchedPage,
  movies: state.movies,
})

const mapDispatchToProps = dispatch => ({
  saveMovies: (movies, lastPage) =>
    dispatch({ type: 'SAVE_MOVIES', payload: { movies, lastPage } }),
  nextPage: () => dispatch({ type: 'NEXT_PAGE' }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)
