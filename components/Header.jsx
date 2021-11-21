import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import { getCategories } from "../services";

const Header = ({ post }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="public/css/main.css" />
      </Head>
      <div className="bg-white shadow-lg rounded-lg lg:p-0 pb-0 mb-6 mt-0">
        <div className="flex flex-wrap place-items-center ">
          <section className="relative mx-auto">
            <nav className="flex justify-between bg-gray-900 text-white w-screen">
              <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                <a className="text-3xl font-bold font-heading">
                  <Link className="text-3xl font-bold font-heading" href="/">
                    Blog Fullstack
                  </Link>
                </a>
                <ul className=" px-4 mx-auto font-semibold font-heading space-x-12">
                  <li className="xl:flex lg:flex text-end">
                    {categories.map((category, index) => (
                      <a
                        className="hidden  hover:text-gray-200 lg:flex xl:flex p-2"
                        href="#"
                      >
                        <ul>
                          <li className="py-2 px-6">
                            <a href={`/category/${category.slug}`}>
                              {category.name}
                            </a>
                          </li>
                        </ul>
                      </a>
                    ))}
                  </li>
                </ul>
                <hr className="border-gray-600" />

                {/* Icons header */}
                <div className="hidden xl:flex space-x-5 items-center"></div>
              </div>

              <button
                className="navbar-burger self-center mr-12 lg:hidden xl:hidden text-red-700 "
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>
            <div
              className={
                "bg-gray-900 text-white lg:flex xl:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug lg:hidden hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">
                      {categories.map((category, index) => (
                        <a
                          className="md:hidden sm:hidden  hover:text-gray-200 xl:flex lg:flex p-2"
                          href="#"
                        >
                          <ul className="">
                            <li className="py-2 px-6">
                              <a href={`/category/${category.slug}`}>
                                {category.name}
                              </a>
                            </li>
                          </ul>
                        </a>
                      ))}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
