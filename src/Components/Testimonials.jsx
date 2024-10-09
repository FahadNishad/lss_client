import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import fig1 from "../images/fig1.jpg"
import fig2 from "../images/fig2.jpg"
import fig3 from "../images/fig3.jpg"
const Testimonials = () => {
  return (
    <div className='md:w-[98.5vw] my-6 px-[46px]'>
           <section className="container mb-2 mt-sm-2 my-md-4 my-lg-5">
    <div className="row pt-2 py-xl-3">
      <div className="col-lg-3 col-md-4">
        <h2 className="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2" style={{ maxWidth: '300px' }}>
          What Our <br className="d-none d-md-inline" />
          Commissioners <br className="d-none d-md-inline" />
          Say About Us
        </h2>

        <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
          <button id="prev-testimonial" className="btn btn-prev btn-icon btn-sm me-2 shadow-lg rounded-[24px]" aria-label="Previous slide">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button id="next-testimonial" className="btn btn-next btn-icon btn-sm ms-2 shadow-lg rounded-[24px]" aria-label="Next slide">
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="col-lg-9 col-md-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '#prev-testimonial',
            nextEl: '#next-testimonial',
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            1000: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>


                <blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">
                    We use the Super Bowl Pool Site every year to raise money for our yearly team softball trip!
                  </p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig1} width="48" className="rounded-circle" alt="Coach Jennifer F." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Coach Jennifer F.</h6>
                  <span className="fs-xs text-muted">Lightning 12U Girls Softball</span>
                  <span className="fs-xs text-muted d-block">Long Island, NY</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 position-relative border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>
<blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">Makes watching the game so much more fun!</p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig2} width="48" className="rounded-circle" alt="Cindy D." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Cindy D.</h6>
                  <span className="fs-xs text-muted">Eagles Jr. Hockey</span>
                  <span className="fs-xs text-muted d-block">Chicago, IL</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 position-relative border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>
<blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">
                    The absolute BEST way to raise money for a youth team. Believe me, I've tried them all.
                  </p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig3} width="48" className="rounded-circle" alt="Tim S." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Tim S.</h6>
                  <span className="fs-xs text-muted">FC Strikers 12U</span>
                  <span className="fs-xs text-muted d-block">Dallas, TX</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 position-relative border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>
<blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">
                    We use the Super Bowl Pool Site every year to raise money for our yearly team softball trip!
                  </p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig1} width="48" className="rounded-circle" alt="Coach Jennifer F." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Coach Jennifer F.</h6>
                  <span className="fs-xs text-muted">Lightning 12U Girls Softball</span>
                  <span className="fs-xs text-muted d-block">Long Island, NY</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 position-relative border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>
<blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">Makes watching the game so much more fun!</p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig2} width="48" className="rounded-circle" alt="Cindy D." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Cindy D.</h6>
                  <span className="fs-xs text-muted">Eagles Jr. Hockey</span>
                  <span className="fs-xs text-muted d-block">Chicago, IL</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div className="card h-100 position-relative border-0 shadow-sm pt-4">
              <div
className="p-2 bg-blue-600 h-100 ml-3"
style={{
  marginLeft:'16px',
  backgroundColor: '#4044ee',
  color: 'white',
  width: '15%',
  borderRadius: '0.5rem', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  textAlign: 'center', // Center align text
}}
>
<i className="bx bxs-quote-left"></i>
</div>
<blockquote className="card-body pb-3 mb-0" style={{height:'120px', overflowY:'auto' }}>
                  <p className="mb-0">
                    The absolute BEST way to raise money for a youth team. Believe me, I've tried them all.
                  </p>
                </blockquote>
              </div>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={fig3} width="48" className="rounded-circle" alt="Tim S." />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">Tim S.</h6>
                  <span className="fs-xs text-muted">FC Strikers 12U</span>
                  <span className="fs-xs text-muted d-block">Dallas, TX</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Testimonials
