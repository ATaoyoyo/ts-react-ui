import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} />
      <Menu defaultIndex={'0'} onSelect={(index) => alert(index)}>
        <MenuItem>Lorem</MenuItem>
        <MenuItem disabled>Lorem</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
        </SubMenu>
      </Menu>

      <Menu
        mode={'vertical'}
        defaultIndex={'0'}
        defaultOpenSubMenu={['2']}
        onSelect={(index) => alert(index)}
      >
        <MenuItem>Lorem</MenuItem>
        <MenuItem disabled>Lorem</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
        </SubMenu>
      </Menu>

      <Button autoFocus>Default</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} onClick={() => alert('Primary')}>
        Primary
      </Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>

      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Small Button
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Button
      </Button>

      <Button btnType={ButtonType.Link}>Link Button</Button>
    </div>
  )
}

export default App
