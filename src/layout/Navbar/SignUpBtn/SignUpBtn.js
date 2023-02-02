import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const SignUpBtn = () => {
  const { t } = useTranslation("common");
  return (
    <li>
      <Link href="/signup">
        <button className="mx-2 btn btn-dark text-white rounded-pill shadow-sm login-btn">
          {t('nav_signup')}
        </button>
      </Link>
    </li>
  );
};
