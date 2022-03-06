import React from 'react'

export default function Footer() {
  return (
  <>
  

     <footer className='bg-dark text-white'>
     <div className='container'>
         <div className='row'>
             <div className='col-md-3'>
             <h2 className=" mt-3">information</h2>
             <i className="fas fa-angle-right p-2"></i><span>About Us</span>
             <br></br>
                <i class="fas fa-angle-right p-2"></i><span>Delivery information</span>
                <br></br>
                <i class="fas fa-angle-right p-2"></i><span>privacy policy</span>
                <br></br>
                <i class="fas fa-angle-right p-2"></i><span>Term & condition</span>

                 </div>

                 <div className='col-md-3'>
                 <h2 className="mt-3">My Account</h2>
                <i className="fas fa-angle-right p-2"></i><span>my account</span>
                <br></br>
                <i className="fas fa-angle-right p-2"></i><span>Order History</span>
                <br></br>
                <i className="fas fa-angle-right p-2"></i><span>Wish List</span>
                <br></br>
                <i className="fas fa-angle-right p-2"></i><span>Newsletter</span>

                 </div>

                 <div className='col-md-3'>
               
                 <h2 className="mt-3">information</h2>
                <i className="fab fa-facebook-f p-2"></i><span>Fasebook</span>
                <br></br>
                <i className="fab fa-twitter p-2"></i><span>Twitter</span>
                <br></br>
                <i className="fas fa-rss p-2 "></i><span>RSS</span>
                 </div>
                 <div className='col-md-3'>
                 <h2 className="mt-3">Contact Us</h2>
                <p>My Company</p>
                <p>42 avenue des Champs</p>
                <p>Elysées 75000 Paris</p>
                <p>Tel 0123-456-789</p>
                <p>Email sales@company.com</p>
               </div>

               <div className="col-md-12">

          <div className="text-center fs-5">
           <span>Specials</span> | <span>Affiliates</span> | <span>Gift Vouchers</span> | <span>Brands</span> | <span>	Returns</span> | <span>	Site Map</span> | <span>	Contact Us</span>
                    </div>
                </div>
   <div className="col-md-12">

     <div className="text-center">
     <p>Powered By<span className=" fs-5">OpenCart </span> Your Store © 2015</p>
     </div>
        </div>


         </div>

     </div>


     </footer>
     
  </>

  )
}

