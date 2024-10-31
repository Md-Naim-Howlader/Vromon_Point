import { FaRegCommentDots } from "react-icons/fa";
import "../styles/blog.css";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Vromon Point";
  });
  return (
    <section className="bg-default pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mini-title">
              <h2>From Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
                an commodo ligula eget dolor. Aenean massa. Cum sociis the
              </p>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-7">
            <div className="blog row align-items-center">
              <img
                className="col-lg-4"
                src="/images/blog/blog-1.png"
                alt="blog image"
              />
              <div className="col-lg-8 mt-4 mt-lg-0">
                <h4>Amazing Tour </h4>
                <p>
                  A1 alit emnos Inipedit ius, vel et hinc agam fabulas. Ut
                  audiam invenire iracundia vim. An eam dico similique, ut sint
                  posse sit,
                </p>
                <span>
                  September 11, 2016 <FaRegCommentDots className="ms-4 me-2" />{" "}
                  1 Comment
                </span>
              </div>
            </div>
            <div className="blog row align-items-center mt-4">
              <img
                className="col-lg-4"
                src="/images/blog/blog-2.png"
                alt="blog image"
              />
              <div className="col-lg-8 mt-4 mt-lg-0">
                <h4>Your Vacation</h4>
                <p>
                  A1 alit emnos Inipedit ius, vel et hinc agam fabulas. Ut
                  audiam invenire iracundia vim. An eam dico similique, ut sint
                  posse sit,
                </p>
                <span>
                  September 11, 2016 <FaRegCommentDots className="ms-4" /> 15
                  Comment
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 position-relative ps-0 ps-lg-5 mt-5 mt-lg-0 mx-auto">
            <img
              className="sell-img"
              src="/images/blog/blog-girl.png"
              alt="blog girl image"
            />
            <div className="sell-up-stiker">
              <h3>Vromon Point</h3>
              <span>Sale up to 70%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
