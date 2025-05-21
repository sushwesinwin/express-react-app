import { NavLink } from "react-router-dom";
import NavItem from "./ui/NavItem";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import MobileNavItem from "./ui/MobileNavItem";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Initialize dark mode from localStorage or system performance
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === 'true' || (!savedMode && systemPrefersDark)) {
      setDarkMode(true);
    }
    }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // document.documentElement -> <html></html>
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center">
                <img src="/paw.svg" alt="logo" width={20} height={20} className="text-white" />
                <span className="font-bold text-xl ml-2">Vet-Clinic</span>
              </NavLink>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1">
                <NavItem to="/" text="Home" />
                <NavItem to="/about" text="About" />
                <NavItem to="/contact" text="Services" />
                <NavItem to="/teams" text="Our Teams" />
                <NavItem to="/shop" text="Shop" />
                <NavItem to="/blog" text="Blog" />
                <NavItem to="/contact" text="Contact" />
            </div>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              {
                darkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )
              }

            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode toggle Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded text-gray-700 dark:text-gray-300"
              aria-lable="Toggle dark mode">
              {
                darkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )
              }
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
            <MobileNavItem to="/" text="Home" />
            <MobileNavItem to="/about" text="About" />
            <MobileNavItem to="/contact" text="Services" />
            <MobileNavItem to="/teams" text="Our Teams" />
            <MobileNavItem to="/shop" text="Shop" />
            <MobileNavItem to="/blog" text="Blog" />
            <MobileNavItem to="/contact" text="Contact" />
        </div>
      </div>
    </nav>
  )
}
