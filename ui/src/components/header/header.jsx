import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './header.css';

const Header = props => {
  return (
    <div className={'header'}>
        Header
        <Dropdown className={'dropdown'} isOpen={"false"} toggle={() => {}}>
          <DropdownToggle caret>
            Class
          </DropdownToggle>
        </Dropdown>
    </div>
  )
}

{/* <DropdownMenu>
{
  Object.keys(props.classMap).map(key => {
    return (
      <DropdownItem name={'class'} value={"101"} key={"101"} onClick={}>{Web Dev 101}</DropdownItem>
      <DropdownItem name={'class'} value={"201"} key={"201"y} onClick={}>{Web Dev 201}</DropdownItem>
      <DropdownItem name={'class'} value={"301"} key={"301"} onClick={}>{Dev Ops}</DropdownItem>
    )
  })
}
</DropdownMenu> */}

export default Header;
