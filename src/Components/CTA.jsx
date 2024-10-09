import React from 'react'

const CTA = ({setIsOpen,setNumber}) => {
  return (
    <div className='w-[98.5vw]'>
      <section className="container mb-4" style={{color:'white'}}>
      <div
        className="dark-mode bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0"
        style={{ backgroundImage: 'url(assets/img/landing/saas-3/cta-bg.jpg)' }}
      >
        <div className="row position-relative zindex-2 py-5 my-1 my-md-3">
          <div className="col-md-6">
            <div className="mx-auto" style={{ maxWidth: '440px' }}>
              <h2 className="h1 pb-1 pb-md-3 pb-lg-4">Get Started on Your Super Bowl 59 Pool</h2>
              <div className="fs-lg d-md-none pb-3 pe-5">
                <p className="d-flex mb-2">
                  Super Bowl 59 is officially scheduled to kick off on Sunday, February 9th 2025 at Caesars Superdome in New Orleans, Louisiana. Get started on your football squares contest for the biggest football game of the year.
                </p>
              </div>
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRightLg"
                className="goSB btn btn-lg btn-primary shadow-primary w-100 w-sm-auto"
                style={{backgroundColor:'#6366f1'}}
                onClick={()=> {setIsOpen(true); setNumber(null)}}
              >
                Create Super Bowl Squares
              </button>
            </div>
          </div>
          <div className="col-md-6 pt-lg-3 pt-xl-4">
            <div className="fs-lg d-none d-md-block pe-5">
              <p className="d-flex mb-2 fs-4" style={{color:'rgba(255, 255, 255, 0.7)'}}>
                Super Bowl 59 is officially scheduled to kick off on Sunday, February 9th 2025 at Caesars Superdome in New Orleans, Louisiana. Get started on your football squares contest for the biggest football game of the year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>
  )
}

export default CTA
