import React, { useState } from 'react';
import herobg from "../images/hero-bg.jpg";
import mainbg from "../images/img_land_main100.webp";
import mainbg1 from "../images/img_land_main1001.webp";
import ers from "../images/land24_49ers.webp";
import ers1 from "../images/land24_49ers (1).webp";
import chiefs from "../images/land24_chiefs.webp";
import chiefs1 from "../images/land24_chiefs (1).webp";
import avatar1 from "../images/av1.jpg";
import avatar2 from "../images/av2.jpg";
import avatar3 from "../images/av3.jpg";

const HeroSection = ({setIsOpen,setNumber}) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Inline style for images
  const imageStyle = {
    transition: 'transform 0.3s ease',
    transform: hoveredImage ? 'translateY(10px)' : 'translateY(0)',
  };

  return (
    <div className="overflow-hidden"> {/* Prevents overflow of child elements */}
      <section
        className="relative bg-dark bg-cover bg-center bg-no-repeat md:p-5 sm:p-2 mb-4"
        style={{ backgroundImage: `url(${herobg})`, color: "white", width: '100vw', overflow: 'hidden' }} // Ensures section fits the viewport
      >
        <div className="container relative z-10 pt-5 pb-2 md:pb-4 lg:pb-5">
          <div className="flex flex-col md:flex-row pt-3 pb-2 md:py-4">
            <div className="md:w-1/2 md:ml-14  pt-5  mb-4 md:mb-0">
            <div className='text-left  md:block hidden'>
              <h1 className="text-4xl md:text-5xl       font-bold pb-2">Free Online Squares Contests at Super Bowl Pool Site</h1>
              <p className=" w-full  text-lg    pb-2 mb-4">Great for fundraisers, office pools, watch parties, and Super Bowl pools.</p>
            </div>
            <div className='text-center md:hidden block'>
              <h1 className="text-4xl md:text-5xl       font-bold pb-2">Free Online Squares Contests at Super Bowl Pool Site</h1>
              <p className=" w-full  text-lg    pb-2 mb-4">Great for fundraisers, office pools, watch parties, and Super Bowl pools.</p>
            </div>
                          <div className="flex justify-center md:justify-start pb-2 pt-2">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRightLg"
                  style={{backgroundColor:'rgb(99, 102, 241)'}}
                  className="btn btn-lg text-white shadow-lg me-3"
                  onClick={()=> {setIsOpen(true); setNumber("100")}}
                >
                  Create a Squares Contest
                </button>
              </div>
              <div className="flex items-center  justify-center md:justify-start pt-4 mt-5">
                <div className="flex -space-x-2">
                  <div className="relative">
                    <img src={avatar1} className="rounded-full w-12 h-12 border-2 border-white" alt="Avatar 1" />
                  </div>
                  <div className="relative">
                    <img src={avatar2} className="rounded-full w-12 h-12 border-2 border-white" alt="Avatar 2" />
                  </div>
                  <div className="relative">
                    <img src={avatar3} className="rounded-full w-12 h-12 border-2 border-white" alt="Avatar 3" />
                  </div>
                </div>
                <div className="text-light ml-3"><strong>200k+</strong> free contests created since 2018</div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-end">
              <div className="relative mx-auto" style={{ maxWidth: '715px', height:"fit-content", position: 'relative' }}>
                {/* Main Background Image */}
                <div className="relative z-20">
                  <picture>
                    <source srcSet={mainbg} type="image/webp" />
                    <source srcSet={mainbg1} type="image/jpeg" />
                    <img
                      src={mainbg}
                      alt="Main Background"
                      className="w-full h-auto"
                      style={imageStyle}
                      onMouseEnter={() => setHoveredImage(true)}  // Set hover state
                      onMouseLeave={() => setHoveredImage(false)} // Reset hover state
                    />
                  </picture>
                </div>

                {/* Team 1 Image - Positioned Fixed on Top Right Corner */}
                <div className="absolute z-30" style={{ top: '5%', right: '5%', width: 'auto' }}>
                  <picture>
                    <source srcSet={ers} type="image/webp" />
                    <source srcSet={ers1} type="image/jpeg" />
                    <img
                      src={ers}
                      alt="49ers"
                      className="w-auto h-auto sm:w-48 sm:h-48 md:w-60 md:h-60" // Adjusted size for different screen sizes
                      style={imageStyle}
                      onMouseEnter={() => setHoveredImage(true)}  // Set hover state
                      onMouseLeave={() => setHoveredImage(false)} // Reset hover state
                    />
                  </picture>
                </div>

                {/* Team 2 Image - Positioned Fixed on Bottom Left Corner */}
                <div className="absolute z-30" style={{ bottom: '5%', left: '5%', width: 'auto' }}>
                  <picture>
                    <source srcSet={chiefs} type="image/webp" />
                    <source srcSet={chiefs1} type="image/jpeg" />
                    <img
                      src={chiefs}
                      alt="Chiefs"
                      className="w-auto h-auto sm:w-48 sm:h-48 md:w-60 md:h-60" // Adjusted size for different screen sizes
                      style={imageStyle}
                      onMouseEnter={() => setHoveredImage(true)}  // Set hover state
                      onMouseLeave={() => setHoveredImage(false)} // Reset hover state
                    />
                  </picture>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
