import Link from "next/link";
<<<<<<< HEAD
import useTranslation from "next-translate/useTranslation";

export const LoginBtn = () => {
  const { t } = useTranslation("common");
  return (
    <li>
      <Link href="/login">
        <button className="mx-2 btn btn-secondary text-white rounded-pill shadow-sm login-btn">
          {t("nav_login")}
        </button>
      </Link>
    </li>
  );
};
=======
import LoginModal from "../../../components/Login-Modal/Modal";

export const LoginBtn = () => {
    return (
        <li> 
            {/* <Link href="/logi"> */}
                {/* <button  className="mx-2 btn btn-secondary text-white rounded-pill shadow-sm login-btn">Login</button> */}
                <LoginModal />
            {/* </Link> */}
        </li>
    );
}
>>>>>>> 7187c26 (Create login-modal)
