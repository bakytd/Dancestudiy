// import { Link } from '@material-ui/core';
// import { Button } from 'bootstrap';
import { Menu, MenuItem } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { clientContext } from "../context/ClientContext";
import icon from "../im/icon1.svg";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarCom() {
  const { productsCountInCard, getProducts } = useContext(clientContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const history = useHistory();
  const [searchValue, setSearchValue] = React.useState("");

  const filterProducts = (key, value) => {
    let search = new URLSearchParams(history.location.search);
    search.set(key, value);
    let url = `${history.location.pathname}?${search.toString()}`;
    history.push(url);
    setSearchValue(search.get("q"));
    getProducts();
  };
  let search = new URLSearchParams(history.location.search);

  useEffect(() => {
    setSearchValue(search.get("q") || "");
  }, [history.location]);

  return (
    <div className="cook">
      <Navbar collapseOnSelect expand="lg" className="cook-nav">
        <Container>
          <Navbar.Brand className="nav-name">FAM ENTERTAINMENT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link to="corz">Избранное</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/admin">Pricing</Link>
              </Nav.Link>
              <Form className="d-flex">
                <FormControl
                  placeholder="Search…"
                  onChange={(e) => filterProducts("q", e.target.value)}
                  value={searchValue}
                  inputProps={{ "aria-label": "search" }}
                />
              </Form>
              <NavDropdown
                className="cook2"
                title={<img width="22" height="22" src={icon}></img>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/">Action</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
