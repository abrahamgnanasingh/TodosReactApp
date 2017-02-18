import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {

    handleNavSelect(eventKey, ev) {
        hashHistory.push(ev.target.getAttribute('href').substr(1));
    }

    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Navbar.Link href="#">Home</Navbar.Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Navbar.Link href="#/todos">Todos</Navbar.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.handleNavSelect}>
                        <NavItem eventKey={1} href="#/about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="#/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default Navigation;