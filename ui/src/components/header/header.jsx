import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import logo from '../../assets/img/t1cg_logo.png';
import './header.css';

const Header = props => {
  return (
    <div className={'header'}>
        <a className={'logoLink'} href="http://edu.t1cg.io">
          <span>
            <img src={logo} alt="T1CG Logo" />
          </span>
        </a>
        <Dropdown className={'dropdown'} isOpen={props.headerDropDown} toggle={props.toggleHeader}>
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
      <DropdownItem name={'class'} value={"101"} key={"101"} onClick={props.handleChange}>{Web Dev 101}</DropdownItem>
      <DropdownItem name={'class'} value={"201"} key={"201"y} onClick={props.handleChange}>{Web Dev 201}</DropdownItem>
      <DropdownItem name={'class'} value={"301"} key={"301"} onClick={props.handleChange}>{Dev Ops}</DropdownItem>
    )
  })
}
</DropdownMenu> */}

export default Header;
