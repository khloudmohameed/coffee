import React from 'react'

export default function Skils() {
  return (
   <>
     <section class="mt-3 mb-5 ">
        <div className="container-fluid">
          <div className="container">
          <div className="row">
              <h1 className='text-center' >Our Sweet Gallery</h1>
              <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png' className='w-25 m-auto my-2'></img>
              <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor</p>

            <div class="col-md-4 position-relative">
             <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-7.jpg" class="img-fluid m-2 p-2  "></img>
       <div className="position-absolute top-50 start-50 translate-middle text-white p-5 mb-5 ">
        <h3>BOLDER FLAVOR </h3>
        <h3>COFFEE DRINKS </h3>
       </div>
       </div>
          
            <div class="col-md-4 position-relative">
              <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-10.jpg" class="img-fluid m-2 p-2"></img>
              <div className="position-absolute top-50 start-50 translate-middle text-white p-5 mb-5 ">
              <h3>PREMIUM </h3>
              <h3> QUALITY COFFEE </h3>
              </div>
             </div>


             <div className="col-md-4 position-relative">

              <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/port-1-gallery-9.jpg" class="img-fluid m-2 p-2"></img>
              <div className="position-absolute top-50 start-50 translate-middle text-white p-5 mb-5 ">
                <h3>PREMIUM </h3>
                <h3> QUALITY COFFEE </h3>
                </div>
              
             </div>

            </div>
          </div>
        </div>
      </section>
   </>
  )
}
