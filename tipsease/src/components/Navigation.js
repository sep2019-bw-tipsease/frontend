import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { signOut, toMarketing } from './actions'

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
        <Nav tabs className="Nav">
          <NavItem>
            <NavLink href="#" onClick={toMarketing}>Tipsease</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" onClick={signOut}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dashboard" >Dashboard</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}