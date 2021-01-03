import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
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
