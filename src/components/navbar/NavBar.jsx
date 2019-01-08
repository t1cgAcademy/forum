import React from 'react';
import logo from '../../assets/img/t1cg_logo.png';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import {
  openComment,
  openPost,
  toggleHeader,
  handleChangeClass
} from '../../Redux/actions/viewActions';

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
            isOpen={props.view.headerDropDown}
            toggle={props.toggleHeader}
          >
            <DropdownToggle caret>Class</DropdownToggle>
            <DropdownMenu>
              {Object.keys(props.view.classMap).map(key => {
                return (
                  <DropdownItem
                    name={'class'}
                    value={key}
                    key={key}
                    onClick={e => props.handleChangeClass(e)}
                  >
                    {props.view.classMap[key].name}
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

const mapStateToProps = state => ({
  view: state.view,
  history: state.history
});

const mapDispatchToProps = dispatch => {
  return {
    openComment: () => {
      return dispatch(openComment());
    },
    openPost: () => {
      return dispatch(openPost());
    },
    toggleHeader: () => {
      return dispatch(toggleHeader());
    },
    handleChangeClass: e => {
      return dispatch(handleChangeClass(e.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
