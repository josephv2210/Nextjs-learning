import React from "react";
import Link from "next/link";

export const Header = () => {
  console.log("hola header");
  return (
    <header>
      <nav>
        <ul className="flex flex-row flex-nowrap list-none gap-x-10 m-0 mx-auto p-8 justify-center">
          <li>
            <Link className="text-xl font-normal" href="/">Home</Link>
          </li>
          <li>
            <Link className="text-xl font-normal" href="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
