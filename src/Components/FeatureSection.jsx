import React from "react";

const FeatureSection = ({ setIsOpen, setNumber }) => {
  return (
    <div className="md:w-[98.5vw]">
      <section className="container py-2 my-md-2 my-lg-4 my-xl-5">
        <h1
          className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2"
          style={{ maxWidth: "700px" }}
        >
          Completely Free and Customizable Online Squares Contests
        </h1>
        <div className="d-flex flex-wrap justify-content-center mb-5 md:w-[50%] w-full  mx-auto">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-2">
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
              <i className="bx bx-check lead text-primary mt-1 me-2"></i>
              <span>
                Comes ready to rock with the{" "}
                <strong className=" ms-1" style={{ color: "#6366f1" }}>
                  most popular features
                </strong>
              </span>
            </li>
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
              <i className="bx bx-check lead text-primary mt-1 me-2"></i>
              <span>
                Easily customize the{" "}
                <strong className=" ms-1" style={{ color: "#6366f1" }}>
                  look and feel
                </strong>
              </span>
            </li>
            <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
              <i className="bx bx-check lead text-primary mt-1 me-2"></i>
              <span>
                Add your{" "}
                <strong className=" mx-1" style={{ color: "#6366f1" }}>
                  complex rules
                </strong>{" "}
                to suit the{" "}
                <strong className="ms-1" style={{ color: "#6366f1" }}>
                  contest needs
                </strong>{" "}
                of your activity or fundraiser
              </span>
            </li>
          </ul>

          <button
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRightLg"
            className="go100 btn btn-xl btn-primary shadow-primary mt-3 px-4 py-2"
            fdprocessedid="x7ffj2"
            style={{ backgroundColor: "#6366f1" }}
            onClick={() => {
              setIsOpen(true);
              setNumber("100");
            }}
          >
            {" "}
            Create a Contest
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
