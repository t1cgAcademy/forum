import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './header.css';

const Header = props => {
  return (
    <div className={'header'}>
        Header
        <Dropdown className={'dropdown'} isOpen={props.headerOpen} toggle={props.toggleHeader}>
          <DropdownToggle caret>
            Class
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem name={'class'} value={"101"} key={"101"} onClick={props.handleClassChange}>{"Web Dev 101"}</DropdownItem>
            <DropdownItem name={'class'} value={"201"} key={"201"} onClick={props.handleClassChange}>{"Web Dev 201"}</DropdownItem>
            <DropdownItem name={'class'} value={"301"} key={"301"} onClick={props.handleClassChange}>{"Dev Ops"}</DropdownItem>
          </DropdownMenu> 
        </Dropdown>
    </div>
  )
}

export default Header;
