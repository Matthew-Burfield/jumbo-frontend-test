/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Search = ({ onSearch, searchTerm, updateSearchTerm }) => (
  <div
    css={css`
      padding: 0 20px 44px;
      position: relative;
      color: #01d277;
      input {
        height: 38px;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        border-radius: 22px;
        width: 100%;
      }
      input[type='text'] {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        padding: 0 44px 0 17px;
        color: #01d277;
      }
      svg {
        position: absolute;
        top: 11px;
        right: 35px;
      }
    `}
  >
    <input
      type="text"
      value={searchTerm}
      onChange={e => updateSearchTerm(e.target.value)}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          onSearch()
        }
      }}
    />
    <FontAwesomeIcon icon={faSearch} size="lg" />
  </div>
)

// Movies.propTypes = {
//   movies: PropTypes.any,
// }

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
})

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm =>
    dispatch({ type: 'SEARCH', payload: searchTerm }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
