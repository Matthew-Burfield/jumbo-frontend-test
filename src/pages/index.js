import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Movies from '../components/movies'

const IndexPage = () => {
  const [{ movies, nextPage }, setData] = useState({ movies: [], nextPage: 1 })
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&page=${nextPage}`
    )
    setData({
      movies: [...movies, ...data.results],
      nextPage: nextPage + 1,
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people (page number: {nextPage}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Movies movies={movies} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={fetchData}>Next page</button>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/page-3/">Go to page 3</Link>
    </Layout>
  )
}

export default IndexPage
