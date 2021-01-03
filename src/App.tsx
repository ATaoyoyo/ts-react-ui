import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>Lorem</MenuItem>
        <MenuItem index={1} disabled>Lorem</MenuItem>
        <MenuItem index={2}>Lorem</MenuItem>
        <MenuItem index={3}>Lorem</MenuItem>
      </Menu>

      <Menu mode={"vertical"} defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>Lorem</MenuItem>
        <MenuItem index={1} disabled>Lorem</MenuItem>
        <MenuItem index={2}>Lorem</MenuItem>
        <MenuItem index={3}>Lorem</MenuItem>
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
