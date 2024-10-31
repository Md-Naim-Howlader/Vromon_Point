import HeroSmall from "../components/HeroSmall";
import { FaStar } from "react-icons/fa";
import "../styles/shop.css";
import { Nav } from "react-bootstrap";
import { useEffect } from "react";

const Shop = () => {
  const heroValues = {
    info: "Amazing tour",
    heading: "Shop",
    sliderNo: "hero-slider hero-2",
    headingColor: "text-white title-heading ",
    paragraph: "",
  };
  useEffect(() => {
    document.title = "Shop | Vromon Point";
  });
  return (
    <div>
      <HeroSmall heroValues={heroValues} />
      <section className="shop bg-default">
        <div className="container shop-box">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <p className="mb-0">Showing 1—12 of 18 results</p>
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <select className="form-select" name="" id="">
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <select className="form-select" name="" id="">
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                    <option selected>Sort by latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-9 col-md-7">
              <div className="row mx-auto mx-lg-0">
                <div className="col-lg-4 shop-item ">
                  <img src="/images/shop/cap.png" alt="cap image" />
                  <div className="product-info">
                    <h6>Modern Hat</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5 mt-lg-0">
                  <img src="/images/shop/camera.png" alt="camera image" />
                  <div className="product-info">
                    <h6>Camera</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5 mt-md-0">
                  <img
                    src="/images/shop/backpack-black.png"
                    alt="Backpack image"
                  />
                  <div className="product-info">
                    <h6>Backpack</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img src="/images/shop/compass.png" alt="Compass image" />
                  <div className="product-info">
                    <h6>Compass</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img src="/images/shop/toy-camera.png" alt="Camera image" />
                  <div className="product-info">
                    <h6>Camera</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img src="/images/shop/back-pack.png" alt="Backpack image" />
                  <div className="product-info">
                    <h6>Backpack</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img src="/images/shop/cap.png" alt="cap image" />
                  <div className="product-info">
                    <h6>Modern Hat</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img src="/images/shop/camera.png" alt="camera image" />
                  <div className="product-info">
                    <h6>Camera</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
                <div className="col-lg-4 shop-item mt-5">
                  <img
                    src="/images/shop/backpack-black.png"
                    alt="Backpack image"
                  />
                  <div className="product-info">
                    <h6>Backpack</h6>
                    <p>TK. 999</p>
                    <Nav>
                      <li className="icon text-primary">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                      <li className="icon text-primary ms-1">
                        <FaStar />
                      </li>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 filter-area mt-5 mt-md-0">
              <h5>Filter by price</h5>
              <div className="color-border">
                <div></div>
              </div>
              <div className="d-flex justify-content-between align-items-center filter-range">
                <span>Price: Tk.99 — Tk999</span>
                <h6>filter</h6>
              </div>
              <div className="filter-price">
                <h5>Filter by price</h5>
                <div className="product-category">
                  <h6>Accessories</h6>
                  <h6>Beach</h6>
                  <h6>Camping</h6>
                  <h6>Summer</h6>
                  <h6>Vintage</h6>
                  <h6>Winter</h6>
                </div>
                <div className="populer-products mt-5">
                  <h5>Popular products</h5>
                  <div className="d-flex mt-5">
                    <div>
                      <img src="/images/shop/compass.png" alt="compass image" />
                    </div>
                    <div className="ms-3">
                      <p>Compass</p>
                      <p className="my-2">TK. 999</p>
                      <Nav>
                        <li className=" text-primary">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                      </Nav>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div>
                      <img
                        src="/images/shop/back-pack.png"
                        alt="Back pack image"
                      />
                    </div>
                    <div className="ms-3">
                      <p>Backpack</p>
                      <p className="my-2">TK. 999</p>
                      <Nav>
                        <li className=" text-primary">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                      </Nav>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div>
                      <img
                        src="/images/shop/toy-camera.png"
                        alt="camera image"
                      />
                    </div>
                    <div className="ms-3">
                      <p>Camera</p>
                      <p className="my-2">TK. 999</p>
                      <Nav>
                        <li className=" text-primary">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                        <li className=" text-primary ms-1">
                          <FaStar />
                        </li>
                      </Nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="globe-image mt-5 d-flex justify-content-center">
                <img src="/images/shop/globe.png" alt="Amazing Tour" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
