/** @jsx jsx */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'

import { tMovie } from '../types'

const BASE_URL = 'http://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w185'

const getPillColor = score => {
  if (score <= 4) {
    return '#D1225B'
  } else if (score > 4 && score < 7) {
    return '#4902A3'
  } else if (score > 7) {
    return '#01d277'
  }
  return '#D1225B'
}

const Movies = ({ movies }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
      grid-auto-rows: 281px;
      grid-row-gap: 24px;
      grid-column-gap: 20px;
      padding: 0 15px 0 15px;
    `}
  >
    {movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </div>
)

const MovieItem = ({ movie }) => (
  <div
    css={css`
      position: relative;
      display: flex;
      flex-direction: column;
      .rating-pill {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 40px;
        height: 20px;
        background-color: ${getPillColor(movie.vote_average)};
        border-radius: 8px;
        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
      }
      .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #e6f7ff;
        padding: 12px 0 6px;
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
        width: 155px;
        img {
          border-radius: 10px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
          max-height: 100%;
          max-width: 100%;
          transition: transform 0.2s;
          :hover {
            transform: scale(1.04);
          }
        }
      `}
    >
      <Link to={`/movie?id=${movie.id}`}>
        <img
          alt={movie.title}
          src={BASE_URL + POSTER_SIZE + movie.poster_path}
        />
      </Link>
    </div>
    <div className="rating-pill">{movie.vote_average * 10}%</div>
    <div className="title">{movie.title}</div>
    <div className="date">
      {new Date(movie.release_date).toLocaleDateString('en-AU', {
        month: 'long',
        year: 'numeric',
      })}
    </div>
  </div>
)

Movies.propTypes = {
  movies: PropTypes.arrayOf(tMovie),
}

MovieItem.propTypes = {
  movie: tMovie,
}

export default Movies
