import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const LinkBtn = (props) => {
  const { name, path } = props;
  return (
    <li className="nav-item">
      <Link
        className={
          useRouter().pathname == `/${path}`
            ? "nav-link nav-link-a"
            : "nav-link nav-link-h"
        }
        href={path}
      >
        {name}
      </Link>
    </li>
  );
};
