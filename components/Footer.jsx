import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Head from "next/head";
import Link from "next/link";

const Footer = ({}) => {
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

      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading text-center">
            <Link
              className="font-bold font-heading text-center sm:text-red-800"
              href="/"
            >
              Blog Fullstack
            </Link>
          </a>
          <ul className=" px-4 mx-auto font-semibold font-heading space-x-12">
            <li className="xl:flex lg:flex md:flex">
              {categories.map((category, index) => (
                <a
                  className=" block hover:text-gray-200 lg:flex xl:flex p-2"
                  href="#"
                >
                  <ul>
                    <li className="py-2 px-6">
                      <a href={`/category/${category.slug}`}>{category.name}</a>
                    </li>
                  </ul>
                  <div class="flex justify-center mt-6"></div>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-white text-bold text-sm bg-gray-900 text-center p-4">
        Suscribete a nuestro boletin para recibir a tu correo las notificaciones
        y te enteres al instante !
      </p>
      <div className="flex justify-center mt-0 bg-gray-900 p-6">
        <div className="bg-white rounded-lg ">
          <div className="flex flex-wrap justify-between md:flex-row ">
            <input
              type="email"
              className="m-0 p-0 appearance-none text-gray-700 text-sm focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="w-full m-1 p-1 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto text-white  ">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center md:justify-between justify-center bg-gray-900">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1">
            Copyright © <span id="get-current-year">2021 </span>
            <a
              href="https://emmanuelpallares.com/"
              className="text-white hover:text-red-600"
              target="_blank"
            >
              Fullstack Blog Valle News .
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
