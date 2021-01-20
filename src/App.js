import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import "./App.css";
import Routes from "./Routes";
import { Link, useHistory } from "react-router-dom";


function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();
  function handleLogout() {
    userHasAuthenticated(false);
    history.push("/");
  }

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted">
          By Bits Code Challenge
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
                <>
                  <Link to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </Link>
                  <Link to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </Link>
                </>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
