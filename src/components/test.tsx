import React from 'react'
import { css } from 'emotion'
const color = 'orange'

const Test = () => (
  <div
    className={`text-blue-500 ${css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}`}
  >
    Yodle
  </div>
)

export default Test
