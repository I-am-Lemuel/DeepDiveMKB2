import Link from 'next/link';
import { Image } from 'react-bootstrap';

export const PointOfView = () => {
    return (
        <div className="container mt-5 justify-content-center mb-5">
            <div>

                <h2 className="text-center fw-bold mb-4">Point of View</h2>
                {/* 3 Cards */}
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                            <Image src="https://wsrv.nl/?url=https://www.fisdom.com/wp-content/uploads/2021/11/invoice-bill-icon.webp&w=500&h=250&fit=cover" className="card-img-top" alt="Transactions Image" />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Reducing transaction costs by 50%</h5>
                                <p className="card-text">Due to the unique structure Globadyme adopts, we can reduce transaction costs by 50% per transaction.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                            <Image src="https://wsrv.nl/?url=https://www.buckaroo.eu/media/3732/betaaloplossingen-buckaroo-banner-2022-2-new.png&w=500&h=250&fit=cover" className="card-img-top" alt="Payment method Image" />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">All the payment methods & currencies you need</h5>
                                <p className="card-text">Your customers can always Pay with their preferred Payment methods and desired currencies with Globadyme.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-sm w-75 mx-auto pov-card-h">
                            <Image src="https://wsrv.nl/?url=https://i.imgur.com/k6UQ0jD.png&w=333&h=166&fit=cover" className="card-img-top" alt="Handshake Image" />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">Win-Win scenario</h5>
                                <p className="card-text">While reducing your transaction costs, we also make sure that your customers can always Pay with their preferred Payment methods and currencies. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Vision*/}
            <div className="row mt-5">
                <div className="col-md-6">
                    <Image src="https://wsrv.nl/?url=https://i.imgur.com/oApovRS.png&w=600&h=450&fit=cover" className="card-img-top rounded rounded-4 shadow-sm " alt="Transactions Image" />
                </div>
                <div className="col-md-6">
                    <h4 className="fw-semibold text-secondary">Our Vision</h4>
                    <h2 className="fw-semibold">The Future of Payments has arrived</h2>
                    <p className="mt-3 mb-3">Globadyme is a Payment Service Provider with a unique structure, that offers online companies the ability to accept payments by a variety of Payment methods and currencies. This unique structure allows us to reduce transaction costs by 50% so that our merchants do not have to pay an arm and a leg in transaction costs.</p>
                    <p className='mb-3'>We have created a best of both worlds scenario where we can offer our merchants the combination of the best prices available in the market and an unrivalled user experience with the best onboarding process you can imagine.</p>
                    <p >We are here to propel the payments industry forward and make it accessible for everybody, small and large. We offer complex insights into your payments data while also keeping it simple for you to understand. We offer you full transparency and make sure that you do not have to pay an arm and a leg in transaction costs.</p>
                </div>
            </div>
            {/* Call to action */}
            <div className="row mt-5 bg-secondary rounded rounded-4 shadow-sm">
                <div className="col-md-6 ms-3">
                    <h2 className="fw-semibold text-white mt-3">Interested?</h2>
                    <p className="text-white mt-3 mb-3">Fill out the contact form with your information and a detailed message, and we&apos;ll get back to you as soon as possible. You can also reach us by phone or email. Don&apos;t hesitate, contact us now and let us help you find the solution you need. We look forward to hearing from you!</p>
                </div>
                <div className="col-md-6 row justify-content-end">
                    <Link className="w-75 my-auto" href="/contact" >
                        <button className="btn btn-light ms-5 rounded-5 w-50 me-5 fw-semibold fs-4 px-3 py-3">Contact us</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}