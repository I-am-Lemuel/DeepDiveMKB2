import Link from "next/link";

export const LoginBtn = () => {
  return (
    <li>
      <Link href="/login">
        <button className="mx-2 btn btn-secondary text-white rounded-pill shadow-sm login-btn">
          Login
        </button>
      </Link>
    </li>
  );
};
