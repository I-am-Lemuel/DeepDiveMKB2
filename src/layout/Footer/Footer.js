import Link from "next/link";
import Image from "next/image";
import { ContactBtn } from "../../components/ContactBtn/ContactBtn";
import { FiMail } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-center mt-3">
      <div className="h-75 align-items-center justify-center justify-content-between d-flex flex-column">
        <div>
          <ContactBtn />
        </div>
        <div className="d-flex f-icons">
          <div className="me-1 f-link-container">
            <Link href="mailto:Yash.ramdjas@globadyme.com">
              <FiMail size={25} color="white" />
            </Link>
          </div>
          <div className="me-1 f-link-container">
            <Link href="https://www.instagram.com/globadyme/">
              <FiInstagram size={25} color="white" />
            </Link>
          </div>
          <div className="me-1 f-link-container">
            <Link href="https://www.linkedin.com/company/globadyme/about/">
              <BsLinkedin size={25} color="white" />
            </Link>
          </div>
          <div className="f-link-container">
            <Link href="tel:+31653795484">
              <BsTelephoneFill size={25} color="white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-25">
        <div className="d-flex f-links mt-4">
          <Link href="/about">About us</Link>
          <p>·</p>
          <Link href="/investors">Investor Relations</Link>
          <p>·</p>
          <Link href="/license">Licensing</Link>
          <p>·</p>
          <Link href="/terms">Terms and Conditions</Link>
          <p>·</p>
          <Link href="/privacy">Privacy Policy</Link>
          <p>·</p>
          <Link href="/docs">Documentation</Link>
        </div>
        <div className="d-flex justify-content-center">
          <div className="image">
            <Image src="/logo.png" width={288} height={68} alt="company logo" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-faded">© 2023 Globadyme</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
