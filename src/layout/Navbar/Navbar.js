import Image from "next/image";
import Link from "next/link";
import { LinkBtn } from "./LinkBtn/LinkBtn";
import { LoginBtn } from "./LoginBtn/LoginBtn";
import { SignUpBtn } from "./SignUpBtn/SignUpBtn";

export const Navbar = () => {
  return (
    //logo, Products, Pricing, Contact, About us, Login, Signup
    <nav className="navbar bg-white shadow">
      <div className="col">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={288} height={68} />
        </Link>
      </div>
      <div className="col">
        <ul className="nav justify-content-center align-content-center">
          <LinkBtn name="Products" path="products" />
          <LinkBtn name="Pricing" path="pricing" />
          <LinkBtn name="Contact" path="contact" />
          <LinkBtn name="About us" path="about" />
        </ul>
      </div>
      <div className="col d-flex justify-content-end">
        <ul className="nav justify-content-center">
          <LoginBtn />
          <SignUpBtn />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
