import React from 'react'
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import Menu, { MenuMode } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuMode = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
}

const testVerProps: MenuMode = {
  defaultIndex: '0',
  mode: 'vertical',
}

const generateMenu = (props: MenuMode) => {
  return (
    <Menu {...props}>
      <MenuItem>Active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>Lorem</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>SubMenu</MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createStyle = () => {
  const cssFile: string = `
    .viking-menu {
      display: none;
    }
    .viking-menu.opened-menu{
      display: block;
    }
  `

  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test menu and menuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyle())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('Active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem base on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('should click menuItem and change active menu and cass right callback', () => {
    const Lorem = wrapper.getByText('Lorem')
    fireEvent.click(Lorem)
    expect(Lorem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')

    fireEvent.click(disabledElement)
    expect(disabledElement).toHaveClass('is-disabled')
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })

  it('should show dropdown items when hover on submenu', async () => {
    expect(wrapper.queryByText('SubMenu')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await waitFor(() => {
      expect(wrapper.queryByText('SubMenu')).not.toBeVisible()
    })

    fireEvent.click(wrapper.getByText('SubMenu'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)

    await waitFor(() => {
      expect(wrapper.queryByText('SubMenu')).not.toBeVisible()
    })
  })
})
