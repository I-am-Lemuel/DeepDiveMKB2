import Link from "next/link";
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