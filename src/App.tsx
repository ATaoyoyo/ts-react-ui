import React from 'react'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={'0'}>
        <MenuItem>Lorem</MenuItem>
        <MenuItem>Lorem</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
        </SubMenu>
      </Menu>
      <Menu defaultIndex={'0'} mode="vertical">
        <MenuItem>Lorem</MenuItem>
        <MenuItem>Lorem</MenuItem>
        <SubMenu title="dropDown">
          <MenuItem>Lorem</MenuItem>
          <MenuItem>Lorem</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App
