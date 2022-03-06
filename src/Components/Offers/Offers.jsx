import React from "react";
import titleAfter from "./title-separator.png";
import style from "./Offers.module.css";
import img1 from "./img/h2-custom-icon-5.png";
import img2 from "./img/h2-custom-icon-6.png";
import img3 from "./img/h2-custom-icon-7.png";
import img4 from "./img/h2-custom-icon-8.png";

function Offers() {
  return (
    <>
      <div className=" m-5 mb-1 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center w-75 h-50 position-relative m-5">
          <h3 className="fs-1 fw-bold position-absolute top-0 start-50 translate-middle-x ">
            OUR DELICIOUS OFFER
          </h3>
          <span className={`${style.beforeH2} `}>
            <img
              className={style.afterH2}
              src={titleAfter}
              alt="titeAfter"
              srcset=""
            />
          </span>
        </div>
        <div className="w-50 fs-5 my-5 mx-3 text-center text-muted ">
          <p>
            Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna
            imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam
            faucibus.
          </p>
        </div>
      </div>

      <div className="container ">
        <div className="row align-content-between justify-content-center text-center mb-5 ">
          <div className="card border-0 col-md-3 ">
            <div className="overflow-hidden ">
              <img
                src={img1}
                className={`${style.imgDim}card-img-top`}
                alt="..."
              />
            </div>

            <div className="card-body my-5">
              <a>TYPES OF COFFEE</a>
              <p className="card-text my-3">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
          </div>
          <div className="card  border-0 col-md-3  ">
            <div className="overflow-hidden ">
              <img
                src={img2}
                className={`${style.imgDim}card-img-top`}
                alt="..."
              />
            </div>

            <div className="card-body my-5">
              <a>BEAN VARIETIES</a>
              <p className="card-text my-3">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
          </div>
          <div className="card  border-0 col-md-3  ">
            <div className="overflow-hidden ">
              <img
                src={img3}
                className={`${style.imgDim}card-img-top`}
                alt="..."
              />
            </div>

            <div className="card-body my-5 ">
              <a>
                COFFEE &#38; PASTRY
              </a>
              <p className="card-text my-3">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
          </div>
          <div className="card  border-0 col-md-3  ">
            <div className="overflow-hidden ">
              <img
                src={img4}
                className={`${style.imgDim}card-img-top`}
                alt="..."
              />
            </div>

            <div className="card-body my-5">
              <a>COFFEE TO GO</a>
              <p className="card-text my-3">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
