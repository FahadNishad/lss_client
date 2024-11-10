import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Footer = () => {
  const [openSection, setOpenSection] = useState(null); // Track which section is open

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle the open section
  };

  return (
    <div className="w-full">
      <footer className="bg-dark mt-3 pt-5 pb-4 px-10 pb-lg-5 text-white">
        <div className="container pt-lg-4">
          <div className="flex flex-wrap justify-between items-start pb-5">
            {/* Left Section: Logo and Description */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center text-light p-0 me-0 mb-3 mb-lg-4">
                <img
                  src="https://superbowlpoolsite.com/img/logos/sbps_light_100px.png"
                  width="47"
                  alt="League Square Site"
                  className="mr-2"
                />
                <b className="mt-2">League Square Site</b>
              </div>
              <p className="text-sm mb-4 text-gray-400">
                SuperBowlPoolSite.com is a website for creating Squares Contests online. We are not a gambling website. We do not
                allow or facilitate real money transactions on the website.
              </p>
            </div>

            {/* Right Section: Links */}
            <div className="w-full lg:w-1/2 flex flex-wrap justify-end gap-x-10 gap-y-6">
              {/* SBPS Links */}
              <div className="w-full lg:w-auto">
                <h6
                  className="mb-2 text-white cursor-pointer lg:cursor-default flex justify-between items-center"
                  onClick={() => toggleSection("SBPS")}
                >
                  <span>LS</span>
                  <span className="ml-2 md:hidden">
                    {openSection === "SBPS" ? <i className="fas fa-chevron-up " /> : <i className="fas fa-chevron-down" />}
                  </span>
                </h6>
                {/* Show the links only on mobile view */}
                <ul className={`nav flex-col text-white ${openSection === "SBPS" ? "" : "hidden"} lg:flex`}>
                  <li className="nav-item">
                    <a href="/blog" className="nav-link px-0 py-1">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/help" className="nav-link px-0 py-1">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact" className="nav-link px-0 py-1">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/about" className="nav-link px-0 py-1">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/donate" className="nav-link px-0 py-1">
                      Donate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/partners" className="nav-link px-0 py-1">
                      Partners
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/suggest" className="nav-link px-0 py-1">
                      Suggestions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contest Links */}
              <div className="w-full lg:w-auto">
                <h6
                  className="mb-2 text-white cursor-pointer lg:cursor-default flex justify-between items-center"
                  onClick={() => toggleSection("Contests")}
                >
                  <span>Contests</span>
                  <span className="ml-2 md:hidden">
                    {openSection === "Contests" ? <i className="fas fa-chevron-up " /> : <i className="fas fa-chevron-down " />}
                  </span>
                </h6>
                {/* Show the links only on mobile view */}
                <ul className={`nav flex-col text-white ${openSection === "Contests" ? "" : "hidden"} lg:flex`}>
                  <li className="nav-item">
                    <a href="/christmas-squares-fundraiser-online" className="nav-link px-0 py-1">
                      Christmas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/thx" className="nav-link px-0 py-1">
                      Thanksgiving
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/mnf" className="nav-link px-0 py-1">
                      MNF Contests
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/customsquares" className="nav-link px-0 py-1">
                      Custom Squares
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/25squares" className="nav-link px-0 py-1">
                      25 Squares
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/50squares" className="nav-link px-0 py-1">
                      50 Squares
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/100squares" className="nav-link px-0 py-1">
                      100 Squares
                    </a>
                  </li>
                </ul>
              </div>

              {/* Popular Articles */}
              <div className="w-full lg:w-auto">
                <h6
                  className="mb-2 text-white cursor-pointer lg:cursor-default flex justify-between items-center"
                  onClick={() => toggleSection("Articles")}
                >
                  <span>Popular Articles</span>
                  <span className="ml-2  md:hidden">
                    {openSection === "Articles" ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
                  </span>
                </h6>
                {/* Show the links only on mobile view */}
                <ul className={`nav flex-col text-white ${openSection === "Articles" ? "" : "hidden"} lg:flex`}>
                  <li className="nav-item">
                    <a href="/blog/1/how-grid-squares-contest-works" className="nav-link px-0 py-1">
                      How a Grid Contest Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/blog/16/ad-free-squares-contests" className="nav-link px-0 py-1">
                      Can I Create an Ad-free Contest?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container pt-1">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center text-md-start pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                2006-2024 ©{" "}
                <a className="text-light" href="https://superbowlpoolsite.com/" target="_blank" rel="noopener">
                  SBPS Entertainment, Inc.
                </a>{" "}
                All rights reserved.
              </p>
              <div className="flex mt-3 sm:mt-0">
                <a
                  target="_new"
                  href="https://www.youtube.com/channel/UCJph7sDetfFpgofeFEs9Kkg/videos"
                  className="btn btn-secondary rounded-full"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
