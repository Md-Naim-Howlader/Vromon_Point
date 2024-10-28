import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiPhoneFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/header.css";
import Countries from "../../components/Countries";
import Languages from "../../components/Languages";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className=" bg-white">
        <div className="header-top row container-fluid justify-content-between">
          <div className="social-link col-lg-9 d-none d-lg-block">
            <div className="social_icon d-flex align-items-center">
              <Nav>
                <Nav.Link className="text-dark fs-5">
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link className="text-dark fs-5">
                  <FaXTwitter />
                </Nav.Link>
                <Nav.Link className="text-dark fs-5">
                  <FaInstagram />
                </Nav.Link>
              </Nav>
              <div className="contact-info ms-5 d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <span className="text-primary icon">
                    <TfiEmail />
                  </span>
                  <span className="icon-txt">travelagency@gmail.com</span>
                </div>
                <div className="d-flex gap-2 align-items-center ms-3">
                  <span className="text-primary icon">
                    <RiPhoneFill />
                  </span>
                  <span className="icon-txt">01722-654123</span>
                </div>
                <div className="d-flex gap-2 align-items-center ms-3">
                  <span className="text-primary icon">
                    <FaLocationDot />
                  </span>
                  <span className="icon-txt">Your location here</span>
                </div>
              </div>
            </div>
          </div>

          <div className="languages_countries col-lg-3 ">
            <div className="d-flex align-items-center justify-content-center me-auto">
              <Countries />
              <Languages />
              <div className="ms-2 ">
                <span className="icon">
                  <FaRegUserCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="navigationBar py-4">
        <Container>
          <NavLink to={"/"} className={"navbar-brand"}>
            <img src="images/logo2.png" alt="Vromon Point Logo" />
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <AiOutlineClose className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </Navbar.Toggle>
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
            <div className="ms-lg-3 mt-3 mt-lg-0">
              <div className="form-group has-search">
                <input
                  type="text"
                  className="form-control header-search"
                  placeholder="Search your Trip..."
                />
                <span type="submit" className="form-control-feedback">
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
