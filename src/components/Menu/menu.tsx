import React, { useState, createContext } from 'react'
import classNames from 'classnames'

type Mode = 'horizontal' | 'vertical'
type selectCallback = (selectedIndex: number) => void

export interface MenuMode {
  defaultIndex?: number
  className?: string
  mode?: Mode
  style?: React.CSSProperties
  onSelect?: selectCallback
}

interface IMenuContext {
  index: number
  onSelect?: selectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuMode> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: 0,
}

export default Menu
