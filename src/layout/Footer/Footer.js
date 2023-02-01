import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { FiInstagram, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    // <footer className="">
    //   <ContactBtn />
    //   <Link href="mailto:Yash.ramdjas@globadyme.com">
    //     <FiMail size={25} color="white" />
    //   </Link>
    //   <Link href="https://www.instagram.com/globadyme/">
    //     <FiInstagram size={25} color="white" />
    //   </Link>
    //   <Link href="https://www.linkedin.com/company/globadyme/about/">
    //     <BsLinkedin size={25} color="white" />
    //   </Link>
    //   <Link href="tel:+31653795484">
    //     <BsTelephoneFill size={25} color="white" />
    //   </Link>
    //   <Link href="/about">About us</Link>
    //   <p>·</p>
    //   <Link href="/investors">Investor Relations</Link>
    //   <p>·</p>
    //   <Link href="/license">Licensing</Link>
    //   <p>·</p>
    //   <Link href="/terms">Terms and Conditions</Link>
    //   <p>·</p>
    //   <Link href="/privacy">Privacy Policy</Link>
    //   <p>·</p>
    //   <Link href="/docs">Documentation</Link>
    //   <div className="image">
    //     <Image src="/logo.png" width={288} height={68} alt="company logo" />
    //   </div>
    //   <p className="">© 2023 Globadyme</p>
    // </footer >
    <footer className="d-flex">
      <div className="col d-flex justify-content-center align-items-center">
        <div className="">
          <Image src="/logo.png" width={288} height={68} alt="company logo" />
          <div className="justify-content-evenly d-flex mt-2">
            <Link className="f-link" href="mailto:Yash.ramdjas@globadyme.com">
              <FiMail size={25} color="black" />
            </Link>
            <Link className="f-link" href="https://www.instagram.com/globadyme/">
              <FiInstagram size={25} color="black" />
            </Link>
            <Link className="f-link" href="https://www.linkedin.com/company/globadyme/about/">
              <BsLinkedin size={25} color="black" />
            </Link>
            <Link className="f-link" href="tel:+31653795484">
              <BsTelephoneFill size={25} color="black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <h3 className="fw-bold">Company</h3>
          <Link className="f-link" href="/about">About us</Link>
          <Link className="f-link" href="/license">Licensing</Link>
          <Link className="f-link" href="/docs">Documentation</Link>
        </div>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <h3 className="fw-bold">Company</h3>
          <Link className="f-link" href="/privacy">Privacy Policy</Link>
          <Link className="f-link" href="/investors">Investor Relations</Link>
          <Link className="f-link" href="/terms">Terms and Conditions</Link>
        </div>
      </div>
    </footer>

  );
};
export default Footer;
