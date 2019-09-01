/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Logo from './logo'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      text-align: center;
      padding: 60px 0 49px;
      background: radial-gradient(
        312.01px at 53.46% -21.35%,
        rgba(5, 112, 172, 0.46) 0%,
        rgba(8, 27, 35, 0) 100%
      );
    `}
  >
    <Logo />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
