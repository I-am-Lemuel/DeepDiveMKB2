import Link from "next/link";

export const ContactBtn = () => {
  return (
    <>
      <Link href="/contact">
        <button className="mx-2 btn btn-secondary text-white rounded-pill shadow-sm">
          Contact Us
        </button>
      </Link>
    </>
  );
};
