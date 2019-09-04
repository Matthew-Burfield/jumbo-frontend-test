/** @jsx jsx */
import { useState } from 'react'
import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const Search = ({ searchTerm, updateSearchTerm }) => {
  const [{ localSearchTerm }, setData] = useState({
    localSearchTerm: searchTerm,
  })
  return (
    <div
      css={css`
        height: 38px;
        background: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        border-radius: 22px;
        padding: 0 51px 0 17px;
        margin: 0 20px 44px;
        position: relative;
        color: #01d277;
        :focus {
          outline-color: cornflowerblue;
          outline-style: auto;
        }
        label {
          display: none;
        }
        input {
          width: 100%;
          border: none;
          height: 100%;
          padding: 0;
          margin: 0;
          :focus {
            outline-color: transparent;
            outline-style: none;
          }
        }
        input[type='search'],
        input[type='search']::placeholder {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #01d277;
        }
        svg {
          position: absolute;
          top: 11px;
          right: 18px;
          height: 16px;
          width: 16px;
        }
      `}
    >
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="search"
        name="search"
        placeholder="Search"
        value={localSearchTerm}
        onChange={e => setData({ localSearchTerm: e.target.value })}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            updateSearchTerm(localSearchTerm)
          }
        }}
      />
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </div>
  )
}

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
