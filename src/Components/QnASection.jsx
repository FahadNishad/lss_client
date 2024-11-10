import React from "react";
import youthimg from "../images/youth_400px.webp";
import youthimg1 from "../images/youth_400px.png";
import branding from "../images/branding_400px.webp";
import branding1 from "../images/branding_400px.png";
import cus_icon from "../images/land_cus.webp";
import cus_icon1 from "../images/land_cus.jpg";

const QnASection = () => {
  return (
    <div className="md:w-[98.5vw] mx-auto my-4 px-8 ">
      <section className="container mt-4 mb-lg-3 pt-lg-2">
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <picture>
                  <source
                    srcSet={youthimg}
                    type="image/webp"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Soccer Team Fundraiser"
                  />
                  <source
                    srcSet={youthimg1}
                    type="image/jpeg"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Soccer Team Fundraiser"
                  />
                  <img
                    src={youthimg1}
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Soccer Team Fundraiser"
                  />
                </picture>
              </div>
              <div className="card-body pb-4">
                <h3 className="h5 mb-1">
                  <a href="https://superbowlpoolsite.com/blog/7/best-fundraiser-ideas" className="stretched-link">
                    Need a Fundraiser Idea?
                  </a>
                </h3>
                <p>
                  A League Square Pool is an exciting way to raise money for your little league team or help support that
                  important charity. For over a decade we've been proud to have helped raise money for everything from High School
                  volleyball teams to Little League Baseball teams around the country.
                </p>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <picture>
                  <source
                    srcSet={branding}
                    type="image/webp"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Branded Squares Contests"
                  />
                  <source
                    srcSet={branding1}
                    type="image/jpeg"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Branded Squares Contests"
                  />
                  <img
                    src={branding1}
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Branded Squares Contests"
                  />
                </picture>
              </div>
              <div className="card-body pb-4">
                <h3 className="h5 mb-1">
                  <a href="/partners" className="stretched-link">
                    Branded White-label Contest?
                  </a>
                </h3>
                <p>
                  For medium to large brands looking for complete customization, including but not limited to: a custom domain
                  name, unique square designs, and embeddable social media feeds (including posts and videos). Everything you need
                  to make a giant marketing splash during the most talked about marketing event of the year.
                </p>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <picture>
                  <source
                    srcSet={cus_icon}
                    type="image/webp"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Custom Size Squares Contest"
                  />
                  <source
                    srcSet={cus_icon1}
                    type="image/jpeg"
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Custom Size Squares Contest"
                  />
                  <img
                    src={cus_icon1}
                    className="card-img-top"
                    style={{ aspectRatio: "1.3666667" }}
                    alt="Custom Size Squares Contest"
                  />
                </picture>
              </div>
              <div className="card-body pb-4">
                <h3 className="h5 mb-1">
                  <a href="/customsquares" className="stretched-link">
                    Custom Size Squares Contest?
                  </a>
                </h3>
                <p>
                  If the standard contest sizes aren't what you're looking for, you can create a squares grid of any size between
                  1x1 to 10x10. Great for unique contest ideas!
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QnASection;
