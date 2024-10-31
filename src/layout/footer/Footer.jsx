import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top bg-default ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h4>About Us</h4>
              <p className="para">
                Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae
              </p>
              <Nav>
                <Nav.Link className="text-dark fs-5 ps-0 pt-0">
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link className="text-dark fs-5 pt-0">
                  <FaXTwitter />
                </Nav.Link>
                <Nav.Link className="text-dark fs-5 pt-0">
                  <FaInstagram />
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <h4>Our Recent Posts</h4>
              <div className="mb-3">
                <p>Visit Thailand, Bali And China</p>
                <span className="date">September 7, 2016</span>
              </div>
              <div className="mb-3">
                <p>Visit Thailand, Bali And China</p>
                <span className="date">September 7, 2016</span>
              </div>
              <div className="mb-3">
                <p>Visit Thailand, Bali And China</p>
                <span className="date">September 7, 2016</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-5 mt-lg-0">
              <h4>Quick Links</h4>
              <Nav className="flex flex-column quick-link">
                <NavLink to={"/"} className="mb-3 text-decoration-none ">
                  Home
                </NavLink>
                <NavLink
                  to={"/destinations"}
                  className="mb-3 text-decoration-none "
                >
                  Destinations
                </NavLink>
                <NavLink to={"/shop"} className="mb-3 text-decoration-none ">
                  Shop
                </NavLink>
                <NavLink to={"/about"} className="mb-3 text-decoration-none ">
                  About
                </NavLink>
                <NavLink to={"/team"} className="mb-3 text-decoration-none ">
                  Team
                </NavLink>
                <NavLink to={"/blogs"} className="mb-3 text-decoration-none ">
                  Blogs
                </NavLink>
                <NavLink to={"/"} className="mb-3 text-decoration-none ">
                  Terms of Services
                </NavLink>
                <NavLink to={"/"} className="mb-3 text-decoration-none ">
                  Privacy Policy
                </NavLink>
              </Nav>
            </div>
            <div className="col-lg-4 ms-3 ms-md-0 col-md-6 mt-5 mt-lg-0 ps-0 ps-lg5">
              <h4>Subscribe to our Newsletter</h4>
              <p className="mb-3">
                Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
              </p>
              <form>
                <input
                  className="form-control mb-2"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="form-control mb-2"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button className="btn btn-primary w-100 py-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-white">
        <div className="container py-4 text-center">
          <p className="mb-0">
            Copyright &copy;{" "}
            <a className="text-decoration-none text-primary" href="">
              Vromon Point
            </a>{" "}
            2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
