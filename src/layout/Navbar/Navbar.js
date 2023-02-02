import Image from "next/image";
import Link from "next/link";
import { LinkBtn } from "./LinkBtn/LinkBtn";
import { LoginBtn } from "./LoginBtn/LoginBtn";
import { SignUpBtn } from "./SignUpBtn/SignUpBtn";
import useTranslation from "next-translate/useTranslation";

export const Navbar = () => {
  const { t } = useTranslation("common");
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
          <LinkBtn name={t('nav_products')} path="products" />
          <LinkBtn name={t('nav_pricing')} path="pricing" />
          <LinkBtn name={t('nav_contact')} path="contact" />
          <LinkBtn name={t('nav_about')} path="about" />
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
