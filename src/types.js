import PropTypes from 'prop-types'

const { bool, string, number, shape, arrayOf, array } = PropTypes

const sharedMovieProps = {
  adult: bool,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: bool,
  poster_path: string,
  id: number.isRequired,
  original_language: string,
  original_title: string,
  title: string.isRequired,
  vote_average: number,
  overview: string,
  release_date: string,
}

export const tMovie = shape({
  ...sharedMovieProps,
  genre_ids: arrayOf(number),
})

export const tDetailedMovie = shape({
  ...sharedMovieProps,
  belongs_to_collection: bool,
  budget: number,
  genres: array,
  homepage: string,
  imdb_id: string,
  production_companies: array,
  production_countries: array,
  revenue: number,
  runtime: number,
  spoken_languages: array,
  status: string,
  tagline: string,
})
