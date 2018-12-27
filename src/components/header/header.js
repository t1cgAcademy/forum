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
          <DropdownMenu>
            {
              Object.keys(props.classMap).map(key => {
                return (
                  <DropdownItem name={'class'} value={key} key={key} onClick={props.handleChange}>{props.classMap[key].name}</DropdownItem>
                )
              })
            }
          </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default Header;
