import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MovieDetails from '../components/movieDetails'

const DetailedMoviePage = ({ location }) => {
  const [{ movie }, setData] = useState({ movies: void 0 })
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${location.search.substring(
        4
      )}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`
    )
    setData({
      movie: data,
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Layout>
      <SEO title="Movie details" />
      <MovieDetails movie={movie} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DetailedMoviePage
