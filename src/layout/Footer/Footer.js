import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { FiInstagram, FiMail } from "react-icons/fi";
import { LanguageSelector } from "../../components/LanguageSelector/LanguageSelector";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="d-flex justify-content-around w-screen">
      <div className="">
        <Image src="/logo.png" width={288} height={68} alt="company logo" />
        <LanguageSelector />
        <div className="justify-content-evenly d-flex mt-4 f-icons">
          <Link
            id="mail"
            className="f-link"
            href="mailto:Yash.ramdjas@globadyme.com"
          >
            <FiMail size={25} color="white" />
          </Link>
          <Link
            id="instagram"
            className="f-link"
            href="https://www.instagram.com/globadyme/"
          >
            <FiInstagram size={25} color="white" />
          </Link>
          <Link
            id="linkedin"
            className="f-link"
            href="https://www.linkedin.com/company/globadyme/about/"
          >
            <BsLinkedin size={25} color="white" />
          </Link>
          <Link id="telephone" className="f-link" href="tel:+31653795484">
            <BsTelephoneFill size={25} color="white" />
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-4">
          <h3 className="fw-bold mb-3">{t("company")}</h3>
          <Link id="about_us" className="f-link" href="/about">
            {t("about_us")}
          </Link>
          <Link id="licensing" className="f-link" href="/license">
            {t("licensing")}
          </Link>
          <Link id="documentation" className="f-link" href="/documentation">
            {t("documentation")}
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column mt-4">
          <h3 className="fw-bold mb-3">{t("info")}</h3>
          <Link id="privacy_policy" className="f-link" href="/privacy">
            {t("privacy_policy")}
          </Link>
          <Link id="investor_relations" className="f-link" href="/investors">
            {t("investor_relations")}
          </Link>
          <Link id="terms_and_conditions" className="f-link" href="/terms">
            {t("terms_and_conditions")}
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
