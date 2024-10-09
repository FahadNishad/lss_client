import React from 'react'

const BoxesSection = ({setIsOpen, setNumber}) => {
  return (
    <div className='md:w-[98.5vw]'>
          <section class="dark-mode bg-[#0b0f19] mb-5 p-4" style={{color:'white'}}>
      <div class="container my-xl-5 my-lg-4 pb-2 py-sm-3 py-md-2">
        <div class="row my-2">
          <div class="col-xl-4 col-lg-5">
      <div class="mb-lg-0 mb-5 mx-lg-0 mx-auto text-lg-start text-center" style={{maxWidth: '26rem'}}>
              <h2 class="h1 mb-4 pb-3">
                Too many boxes?<br/>
                Try these sizes.
              </h2>
              <p class="mb-4" style={{color:'rgba(255, 255, 255, 0.7)'}}>If you are unsure whether or not you will find enough players to purchase all 100 squares in a standard squares contest, don't worry!</p>
              <p class="mb-4" style={{color:'rgba(255, 255, 255, 0.7)'}}>Check out these popular smaller contest options.</p>
            </div>
          </div>
          <div class="col-lg-7 offset-xl-1">
            <div class="row row-cols-sm-2 row-cols-1 gy-4">

        
              <div class="col hover-effect" >
                <div class="card card-hover bg-dark border-secondary shadow position-relative"  style={{border:'1px solid rgba(255, 255, 255, 0.14)'}}>
                  <div class="card-body mx-3 my-3 pt-0 text-center">
                    <div class="display-1 d-block text-white "><b>25</b></div>
                    <div className="mb-3 text-gray-100" style={{color:'rgba(255, 255, 255, 0.7)'}}>25 Square Contest</div>
                    <button  onClick={()=> {setIsOpen(true); setNumber("25")}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightLg" className="go50 btn btn-primary stretched-link mx-6  px-4 py-2" fdprocessedid="fdi81j" style={{backgroundColor:'#6366f1', marginLeft:'8px', marginRight:'8px'}}>Create</button>
                    </div>
                </div>
              </div>

            
              <div class="col hover-effect"  >
                <div class="card card-hover border-secondary shadow position-relative bg-dark"  style={{border:'1px solid rgba(255, 255, 255, 0.14)'}}> 
                  <div class="card-body mx-3 my-3 pt-0 text-center">
                    <div class="display-1 d-block text-white text-bolder"><b>50</b></div>
                    <div class="mb-3" style={{color:'rgba(255, 255, 255, 0.7)'}}>50 Square Contest</div>
                    <button  onClick={()=> {setIsOpen(true); setNumber("50")}}  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightLg" className="go50 btn btn-primary stretched-link mx-6 py-2 px-4" fdprocessedid="fdi81j" style={{backgroundColor:'#6366f1', marginLeft:'8px', marginRight:'8px'}}>Create</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default BoxesSection
