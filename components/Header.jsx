import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = ({ post }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    // <div className="container-fluid mb-4 ">
    //   <nav className="navbar navbar-expand-lg bg-dark ">
    //     <div className="container">
    //       <Link className="navbar-brand text-white font-weight-bold" href="/">
    //         <h1 className="text-white font-weight-bold">Vallemx</h1>
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon mr-auto p-2"></span>
    //       </button>
    //       <div className="justify-content-sm-end mb-4 d-flex justify-content-lg-end justify-content-md-start">
    //         {categories.map((category, index) => (
    //           <div
    //             className="collapse navbar-collapse"
    //             id="navbarSupportedContent"
    //           >
    //             <Link key={index} href={`/category/${category.slug}`}>
    //               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                   <a className="nav-link text-white font-weight-bold">
    //                     {category.name}
    //                   </a>
    //                 </li>
    //               </ul>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Valle MX
        </Link>
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
          className="collapse navbar-collapse flex lg:justify-end "
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            {categories.map((category, index) => (
              <li className="nav-item   ">
                <a className="nav-link" aria-current="page" href="#">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
