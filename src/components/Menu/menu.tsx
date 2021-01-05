import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type Mode = 'horizontal' | 'vertical'
type selectCallback = (selectedIndex: string) => void

export interface MenuMode {
  defaultIndex?: string
  className?: string
  mode?: Mode
  style?: React.CSSProperties
  onSelect?: selectCallback
  defaultOpenSubMenu?: string[]
}

interface IMenuContext {
  index: string
  onSelect?: selectCallback
  mode?: Mode
  defaultOpenSubMenu?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuMode> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    defaultOpenSubMenu,
    children,
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'menu-item' || 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error(
          'Warning: Menu has child which is not a MenuItem component.'
        )
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenu: [],
}

export default Menu
