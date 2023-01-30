import Link from "next/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="">
      <footer class="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
          <Image src="/logo.png" width={300} height={75} alt="company logo" />
        </section>
        {/* <!-- Section: Social media --> */}
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Contact Us:
                </h6>
                <p>
                  <p>
                    <Link href="/investor">Yash.ramdjas@globadyme.com</Link>
                  </p>
                  <p>
                    <Link href="/investor">(+31) 6 53 79 54 84</Link>
                  </p>
                  <FiMail size={30} className="me-1" />
                  <FiInstagram size={28} className="me-1" />
                  <BsLinkedin size={25} className="me-1" />
                  <BsTelephoneFill size={25} />
                </p>
              </div>
              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">{/* Products */}</h6>
                <p>
                  <Link href="/about_us">• About us</Link>
                </p>
                <p>
                  <Link href="/investor">• Investor relations</Link>
                </p>
                <p>
                  <Link href="/liscensing">• Liscensing</Link>
                </p>
                <p>
                  <Link href="/terms_conditions">• Terms and conditions</Link>
                </p>
                <p>
                  <Link href="/privacy">• Privacy policy</Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div class="text-center p-4">
          © 2023 Globadyme <br></br>
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            Made with love by Globsquad
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </footer>
  );
};
export default Footer;
