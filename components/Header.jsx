import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import Head from "next/head";
import Link from "next/link";
import { getCategories } from "../services";

const Header = ({ post }) => {
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
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="navbar navbar-expand-lg  background-milenio-nav  text-black ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <h1 className="h1-titulo ">VALLE DE SANTIAGO BLOG</h1>
          </Link>
          <hr />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex lg:justify-end  "
            id="navbarNav"
          >
            <ul className="navbar-nav  ">
              {categories.map((category, index) => (
                <li className="nav-item background-milenio-nav  ">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href={`/category/${category.slug}`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="nav-scroller py-1 mb-2"></div>
      </nav>
      <div className="bg-green-600 mb-4">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-end">
              <p className="ml-3 font-medium text-white truncate">
                <div className="text-center mt-1 padding-0">
                  <p>Hora Actual</p>
                  <Clock value={value} />
                </div>
                <span className="md:hidden">Bienvenido</span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
