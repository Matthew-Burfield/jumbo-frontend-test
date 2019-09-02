/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Logo from './logo'

const lineCoordinates = [
  { id: 1, top: -120, left: 110, height: 200 },
  { id: 2, top: -150, left: 110, height: 200 },
  { id: 3, top: 40, left: 50, height: 200 },
  { id: 4, top: -105, right: 10, height: 200 },
  { id: 5, top: -145, right: 1, height: 200 },
  { id: 6, top: 70, right: 90, height: 150 },
]

const Header = ({ siteTitle }) => (
  <header
    css={css`
      position: relative;
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
    {lineCoordinates.map(line => (
      <div
        key={line.id}
        css={css`
          background-color: rgba(1, 210, 119, 0.83);
          height: ${line.height}px;
          width: 4px;
          border-radius: 3.5px;
          transform: rotate(45deg);
          position: absolute;
          top: ${line.top}px;
          ${line.left ? `left: ${line.left}px;` : ''}
          ${line.right ? `right: ${line.right}px;` : ''}
        `}
      />
    ))}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
