import Link from "next/link";
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
