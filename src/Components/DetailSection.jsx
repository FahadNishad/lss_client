import React from 'react'
import bgthx_thumb from "../images/bgthx_thumb.webp"
import bgthx_thumb_1 from "../images/bgthx_thumb.png"
const DetailSection = () => {
  return (
    <div className='md:w-[96vw] md:ml-4'>
       <section>
  <div className=" bg-dark my-2 my-md-2 my-lg-5 py-5 px-3 px-md-0" style={{color:'white'}}>
      <div className="row align-items-center">
        <div className=" col-md-5 offset-lg-1 text-center text-md-start ps-md-5 ps-lg-0 ps-xl-5 pb-2 pb-md-0 mb-4 mb-md-0">
          <p className="text-[36px] mb-3 " style={{color:'rgba(255, 255, 255, 0.7)'}}>Thanksgiving Day football?</p>
          <h2 className="h1 pb-2 pb-md-2">
            Take Your <span className="text-primary">Family Dinner Party</span> to&nbsp;the Next Level
          </h2>
          <p className="mb-5" style={{color:'rgba(255, 255, 255, 0.7)'}}>
            The NFL has slated some great matchups for a much needed Thanksgiving Day slate. Create a squares contest for any of the three games or create one contest for all three games!
          </p>
          <a href="/thx" className="btn btn-primary btn-lg" style={{backgroundColor:'#6366f1'}}>More Details</a>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="d-table mx-auto">
            <picture width="380">
              <source srcSet={bgthx_thumb} type="image/webp" className="card-img-top" style={{ aspectRatio: '1.3666667' }} alt="Thanksgiving Turkey" />
              <source srcSet={bgthx_thumb_1} type="image/jpeg" className="card-img-top" style={{ aspectRatio: '1.3666667' }} alt="Thanksgiving Turkey" />
              <img src={bgthx_thumb_1} className="card-img-top" style={{ aspectRatio: '1.3666667' }} alt="Thanksgiving Turkey" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default DetailSection
