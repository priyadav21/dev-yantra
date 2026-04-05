'use client'

import Link from "next/link";
import logo from '../assets/logo2.png';
import Image from "next/image";

const Nav = (props) => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-800 p-4 w-full">
        <div className="flex space-x-2">
            <Image src={logo} alt="Logo" className="h-8 w-8" />
            <h6 className="text-2xl font-extrabold text-cyan-300">
                DevYantra
            </h6>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-white hover:text-gray-300">
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-4">
        {props.children}
      </div>
    </>
  );
};

export default Nav;