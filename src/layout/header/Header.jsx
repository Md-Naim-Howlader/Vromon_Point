import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="shadow py-4">
        <Container>
          <Navbar.Brand href="#home">
            <img src="images/logo2.png" alt="Vromon Point Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link" to={"/destinations"}>
                Destinations
              </NavLink>
              <NavLink className="nav-link" to={"/shop"}>
                Shop
              </NavLink>
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
              <NavLink className="nav-link" to={"/team"}>
                Team
              </NavLink>
              <NavLink className="nav-link" to={"/blogs"}>
                Blogs
              </NavLink>
              <NavLink className="nav-link" to={"/trips"}>
                Trips
              </NavLink>
            </Nav>
            <div className="ms-3">
              {/* <input
                type="text"
                name=""
                className="form-control bg-transparent"
                placeholder="Search"
              /> */}

              <div className="form-group has-search">
                <input
                  type="text"
                  className="form-control header-search"
                  placeholder="Search your Trip..."
                />
                <span className="form-control-feedback">
                  <IoIosSearch />
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
