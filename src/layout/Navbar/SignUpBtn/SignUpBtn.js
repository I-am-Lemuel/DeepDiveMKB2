import Link from "next/link";

export const SignUpBtn = () => {
    return (
        <li>
            <Link href="/signup">
                <button className="mx-2 btn btn-dark text-white rounded-pill shadow-sm login-btn">Sign up</button>
            </Link>
        </li>
    );
}