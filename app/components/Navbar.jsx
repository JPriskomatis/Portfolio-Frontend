"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const pages = [
    { name: "Home", id: "hero" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Determine the "other language" dynamically
  const otherLanguage = i18n.language === "en" ? "gr" : "en";

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white py-3 px-6 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/#hero">
            <img src="/images/LogoSecond.png" alt="Logo" className="h-[50px] w-auto" />
          </Link>
        </div>

        {/* Centered Links - Desktop */}
        <ul className="hidden md:flex space-x-16 text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {pages.map((page) => (
            <li key={page.name}>
              <Link href={`/#${page.id}`} scroll={true} className="hover:text-newGreen">
                {t(page.name)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side - Language Switcher + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Only show the other language */}
          <button
            onClick={() => changeLanguage(otherLanguage)}
            className="text-white hover:text-newGreen px-2 py-1 border border-white rounded"
          >
            {otherLanguage.toUpperCase()}
          </button>

          {/* Hamburger for mobile */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none ml-2">
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4">
          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={`/#${page.id}`}
                  scroll={true}
                  className="block text-lg hover:text-newGreen"
                  onClick={() => setIsOpen(false)}
                >
                  {t(page.name)}
                </Link>
              </li>
            ))}
            {/* Also add the language button in mobile menu */}
            <li>
              <button
                onClick={() => {
                  changeLanguage(otherLanguage);
                  setIsOpen(false); // close menu after changing language
                }}
                className="text-white hover:text-newGreen px-2 py-1 border border-white rounded"
              >
                {otherLanguage.toUpperCase()}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
