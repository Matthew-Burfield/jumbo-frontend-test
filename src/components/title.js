/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

const Title = ({ searchTerm }) => (
  <h1
    css={css`
      margin: 0;
      padding: 0 20px 12px;
    `}
  >
    {searchTerm === '' ? 'Popular Movies' : `Results: ${searchTerm}`}
  </h1>
)

Title.propTypes = {
  searchTerm: PropTypes.string,
}

export default Title
