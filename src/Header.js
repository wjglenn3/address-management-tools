import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
    return (
      <Navbar className="mb-3" bg="dark" variant="dark">
        <Navbar.Brand className="ms-2">U.S. Census Bureau</Navbar.Brand>
        <Navbar.Text className="me-3">Address Matching Tool</Navbar.Text>
      </Navbar>
    );
}

export default Header;