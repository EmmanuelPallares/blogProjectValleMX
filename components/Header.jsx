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
                  <Link className="text-3xl font-bold font-heading" href="./">
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

                {/* Icons header */}
                <div className="hidden xl:flex space-x-5 items-center">
                  {/* <a className="hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </a> */}
                  {/* <a className="flex items-center hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-800 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </a> */}

                  {/* <a
                      className="flex items-center hover:text-gray-200"
                      href="#"
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
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a> */}
                </div>
              </div>
              {/* <a className="xl:hidden flex mr-6 items-center" href="#">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a> */}
              <button
                className="navbar-burger self-center mr-12 lg:hidden xl:hidden text-red-700 "
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <button
                  className="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Regular
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  soy el boton
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

        {/* <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Follow me on twitter"
              href="https://www.twitter.com/asad_codes"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className=""
                src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
              />
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Header;
