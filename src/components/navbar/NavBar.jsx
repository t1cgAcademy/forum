import React from 'react';
import logo from '../../assets/img/t1cg_logo.png';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className={'logoLink'} href="http://edu.t1cg.io">
            <span>
              <img src={logo} alt="T1CG Logo" />
            </span>
          </a>

          <Dropdown
            className={'dropdown'}
            isOpen={props.headerDropDown}
            toggle={props.toggleHeader}
          >
            <DropdownToggle caret>Class</DropdownToggle>
            <DropdownMenu>
              {Object.keys(props.classMap).map(key => {
                return (
                  <DropdownItem
                    name={'class'}
                    value={key}
                    key={key}
                    onClick={props.handleChange}
                  >
                    {props.classMap[key].name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>

          <a href="/">T1CG Forum</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
