import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-8 hidden md:flex">
        <Link href="#about">
          About
        </Link>
        <Link href="#projects">
          Projects
        </Link>
        <Link href="#contact">
          Contact
        </Link>
      </div>
      <div className="md:hidden">
        <button>
          {/* Mobile Hamburger Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
