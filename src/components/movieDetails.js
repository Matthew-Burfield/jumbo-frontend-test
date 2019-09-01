/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BASE_URL = 'http://image.tmdb.org/t/p/'
const BACKDROP_SIZE = 'w780'
const POSTER_SIZE = 'w154'
// const id = '420818'

const formatRunTime = runtime => {
  if (runtime === null) return ''
  return `${Math.floor(runtime / 60)}h ${runtime % 60} min`
}

const MovieDetails = ({ movie }) =>
  !movie ? null : (
    <>
      <div
        css={css`
          position: relative;
          padding: 0 20px;
        `}
      >
        <div
          css={css`
            padding: 179px 0 0;
            z-index: 1;
            position: relative;
            display: flex;
            img {
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5),
                0px 8px 16px rgba(0, 0, 0, 0.5),
                0px 16px 32px rgba(0, 0, 0, 0.5);
              border-radius: 10px;
              max-height: 213px;
              max-width: 140px;
            }
          `}
        >
          <img
            alt={movie.title}
            src={BASE_URL + POSTER_SIZE + movie.poster_path}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding: 87px 27px 0 18px;
              h1 {
                font-size: 28px;
                line-height: 30px;
                margin: 0;
                padding-bottom: 16px;
              }
              p {
                color: #b8d8e6;
                font-size: 12px;
                line-height: 21px;
                margin: 0;
                font-weight: normal;
              }
            `}
          >
            <h1>{movie.title}</h1>
            <p>
              <span>
                {new Date(movie.release_date).toLocaleDateString('en-AU', {
                  year: 'numeric',
                })}
              </span>
              {' • '}
              <span>{movie.vote_average * 100}% User Score</span>
            </p>
            <p>{formatRunTime(movie.runtime)}</p>
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            height: 1px;
            border-top: 1px solid #0f303d;
            box-sizing: border-box;
            margin: 30px 0 24px;
          `}
        />
        <div
          css={css`
            h2 {
              font-size: 20px;
              line-height: 24px;
            }
            p {
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 24px;
              color: #9fbbc7;
            }
          `}
        >
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      <Link
        to="/"
        css={css`
          color: #e3f4fc;
          position: absolute;
          top: 32px;
          left: 19px;
          z-index: 1;
        `}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <img
        alt="backdrop"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 244px;
        `}
        src={BASE_URL + BACKDROP_SIZE + movie.backdrop_path}
      />
    </>
  )

MovieDetails.propTypes = {
  movie: PropTypes.any,
}

export default MovieDetails
