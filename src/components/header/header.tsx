import React, { useContext } from 'react'
import { Context, ContextValues } from '../../utils/Context'
import { css } from 'emotion'
const color = 'orange'

const Header = () => {
  const { globalName, setGlobalName }: ContextValues = useContext(
    Context
  ) as ContextValues
  return (
    <>
      globalName is {globalName}
      <div
        onClick={() => {
          setGlobalName('Dev Projects')
        }}
        className={`text-blue-500 ${css`
          cursor: pointer;
          padding: 5px;
          background-color: grey;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
          width: 200px;
        `}`}
      >
        Click me
      </div>
      <br />
    </>
  )
}

export default Header
