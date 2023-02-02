import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { FiInstagram, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="d-flex justify-content-around w-screen">
      <div className="">
        <Image src="/logo.png" width={288} height={68} alt="company logo" />
        <div className="justify-content-evenly d-flex mt-4">
          <Link className="f-link" href="mailto:Yash.ramdjas@globadyme.com">
            <FiMail size={25} color="black" />
          </Link>
          <Link className="f-link" href="https://www.instagram.com/globadyme/">
            <FiInstagram size={25} color="black" />
          </Link>
          <Link
            className="f-link"
            href="https://www.linkedin.com/company/globadyme/about/"
          >
            <BsLinkedin size={25} color="black" />
          </Link>
          <Link className="f-link" href="tel:+31653795484">
            <BsTelephoneFill size={25} color="black" />
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-4">
          <h3 className="fw-bold mb-3">Company</h3>
          <Link className="f-link" href="/about">
            About us
          </Link>
          <Link className="f-link" href="/license">
            Licensing
          </Link>
          <Link className="f-link" href="/documentation">
            Documentation
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-4">
          <h3 className="fw-bold mb-3">Company</h3>
          <Link className="f-link" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="f-link" href="/investors">
            Investor Relations
          </Link>
          <Link className="f-link" href="/terms">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
