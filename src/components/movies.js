/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

import Movie from './movie'

const Movies = ({ movies }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      grid-auto-rows: 281px;
      grid-row-gap: 24px;
      grid-column-gap: 30px;
    `}
  >
    {movies.map(movie => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </div>
)

Movies.propTypes = {
  movies: PropTypes.any,
}

export default Movies
