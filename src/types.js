import PropTypes from 'prop-types'

const { bool, string, number, shape, arrayOf, object } = PropTypes

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
  genres: object,
  homepage: string,
  imdb_id: number,
  production_companies: object,
  production_countries: object,
  revenue: number,
  runtime: number,
  spoken_languages: object,
  status: string,
  tagline: string,
})
