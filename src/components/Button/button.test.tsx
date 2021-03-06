import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

/**
 * 依赖: jest @testing-library/jest-dom @testing-library/react
 *
 * jest: (create-react-app 默认添加了jest)
 *  npm install --save-dev jest
 *
 * @testing-library/jest-dom: (create-react-app 3.3.0版本默认已添加)
 *  npm install --save-dev @testing-library/jest-dom
 *
 * @testing-library/react: (create-react-app 3.3.0版本默认已添加. 包含@testing-library/dom依赖)
 *  npm install --save-dev @testing-library/react
 *
 * AAA模式：编排（Arrange），执行（Act），断言（Assert）。
 */

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'class',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test button component', () => {
  it('should render the correct default button', function () {
    const button = render(<Button {...defaultProps}>Default Button</Button>)
    const element = button.getByText('Default Button')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    // @ts-ignore
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.queryByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg class')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" href="http://dummyurl">
        Link
      </Button>
    )
    const element = wrapper.queryByText('Link')

    expect(element).toBeInTheDocument()
    // @ts-ignore
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')

    expect(element).toBeInTheDocument()
    // @ts-ignore
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
