/** @jsx jsx */
import PropTypes from 'prop-types'

import { jsx, css } from '@emotion/core'

const BASE_URL = 'http://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w185'

const Movie = ({ movie }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #e6f7ff;
      }
      .date {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #a1d1e6;
      }
    `}
  >
    <div
      css={css`
        height: 233px;
      `}
    >
      <img alt={movie.title} src={BASE_URL + POSTER_SIZE + movie.poster_path} />
    </div>
    <div className="title">{movie.title}</div>
    <div className="date">{movie.release_date}</div>
  </div>
)

Movie.propTypes = {
  movie: PropTypes.any,
}

export default Movie
