'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const pages = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white py-3 px-6 flex items-center justify-between shadow-md">
      <div className="flex-1">
        <Link href="/#hero">
          <img
            src="/images/LogoSecond.png"
            alt="Logo"
            className="h-[50px] w-auto"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-16 text-xl">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                href={`/#${page.id}`}
                scroll={true}
                className="hover:text-newGreen"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1"></div>
    </nav>
  );
};

export default Navbar;
