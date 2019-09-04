/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

import Logo from './logo'

const lineCoordinates = [
  { id: 1, top: -114, left: 79 },
  { id: 2, top: -87, left: 79 },
  { id: 3, top: 46, left: 52 },
  { id: 4, top: -69, right: 52 },
  { id: 5, top: -105, right: 41 },
  { id: 6, top: 52, right: 73 },
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
          height: 162px;
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
