import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/login">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register" > Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dashboard" >Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 4</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}