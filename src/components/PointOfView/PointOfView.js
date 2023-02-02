import Link from "next/link";
import { Image } from "react-bootstrap";

export const PointOfView = () => {
  return (
    <>
    <div className="container mt-5 justify-content-center mb-5">
      <div>
        <h2 className="text-center fw-bold mb-4">Point of View</h2>
        {/* 3 Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
              <Image
                src="https://wsrv.nl/?url=https://www.fisdom.com/wp-content/uploads/2021/11/invoice-bill-icon.webp&w=500&h=250&fit=cover"
                className="card-img-top"
                alt="Transactions Image"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">
                  Reducing costs by 50%
                </h5>
                <p className="card-text">
                  Due to the unique structure Globadyme adopts, we can reduce
                  transaction costs by 50% per transaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
              <Image
                src="https://wsrv.nl/?url=https://www.buckaroo.eu/media/3732/betaaloplossingen-buckaroo-banner-2022-2-new.png&w=500&h=250&fit=cover"
                className="card-img-top"
                alt="Payment method Image"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">
                  In all the ways you need
                </h5>
                <p className="card-text">
                  Your customers can always Pay with their preferred Payment
                  methods and desired currencies with Globadyme.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
              <Image
                src="https://wsrv.nl/?url=https://i.imgur.com/k6UQ0jD.png&w=333&h=166&fit=cover"
                className="card-img-top"
                alt="Handshake Image"
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Win-Win scenario</h5>
                <p className="card-text">
                  While reducing your transaction costs, we also make sure that
                  your customers can always Pay with their preferred Payment
                  methods and currencies.{" "}
                </p>
              </div>
            </div>
        </div>
  
    
       </div>
        </div>
      </div>
      {/* Vision*/}
      <div className="row mt-5">
        <div className="col-md-6">
          <Image
            src="https://wsrv.nl/?url=https://i.imgur.com/oApovRS.png&w=600&h=450&fit=cover"
            className="card-img-top rounded rounded-4 shadow-sm "
            alt="Transactions Image"
          />
        </div>
        <div className="col-md-6 mt-4 d-flex row align-content-center">
          <h4 className="fw-semibold text-secondary">What We Do</h4>
          <h2 className="fw-semibold">The Future of Payments has arrived</h2>
          <p className="mt-4">
            Globadyme is a PSP that offers online companys the ability to accept
            payments with various methods & currencies, reducing transaction
            costs by 50%.
          </p>
          <p className="">
            We offer the best prices & user experience with a simple onboarding
            process. We aim to propel the payments industry and provide complex
            insights while keeping it simple. We offer full transparency to
            ensure low transaction costs.
          </p>
        </div>
      </div>
      {/* Call to action */}
      <div className="row mt-5 bg-secondary rounded rounded-4 shadow-sm">
        <div className="col-md-6 ms-3">
          <h2 className="fw-semibold text-white mt-3">Interested?</h2>
          <p className="text-white mt-3 mb-3">
            Fill out the contact form, and we&apos;ll get back to you as soon as
            possible.
          </p>
          <p className="text-white mt-3 mb-3">
            We look forward to hearing from you!
          </p>
        </div>
        <div className="col-md-6 row justify-content-end p-2">
          <Link className="w-75 my-auto" href="/contact">
            <button className="btn btn-light ms-5 rounded-5 w-75 me-5 fw-semibold fs-4 px-3 py-3">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
