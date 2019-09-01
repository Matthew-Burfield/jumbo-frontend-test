/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      marginbottom: 1.45rem;
      padding: 60px 0 49px;
      background: radial-gradient(
        312.01px at 53.46% -21.35%,
        rgba(5, 112, 172, 0.46) 0%,
        rgba(8, 27, 35, 0) 100%
      );
    `}
  >
    <div
      css={css`
        position: relative;
        margin: 0px;
        width: 90px;
        margin: 0 auto;
        padding: 0 10px 30px;
        border-top: 3px solid #01d277;
        /* border-right: 3px solid #01D277; */
        /* border-bottom: 3px solid #01D277; */
        border-left: 3px solid #01d277;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: 40px;
          width: 10px;
          background: #081b23;
          bottom: -10px;
          left: 0;
          transform: rotate(45deg);
          z-index: 1;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: -3px;
          left: 7px;
          border-top: 3px solid #01d277;
          border-right: 3px solid #01d277;
          border-bottom: 3px solid #01d277;
          /* border-left: 3px solid #01d277; */
          /* border-radius: 10px; */
          right: 0;
          bottom: 10px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        `}
      ></div>
      <h1
        css={css`
          margin: 0;
          line-height: 0.6;
        `}
      >
        <Link
          to="/"
          css={css`
            color: #01d277;
            font-size: 19px;
            font-family: 'Roboto Condensed', sans-serif;
            text-decoration: none;
            letter-spacing: 2px;
          `}
        >
          {siteTitle.toUpperCase()}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
