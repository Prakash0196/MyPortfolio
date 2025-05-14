

import React from "react";
import { FooterNav } from "./FooterNav";

export const Footer = () => {
  return (
    <section className="footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <FooterNav nav="Home" />
          </li>
          <li className="nav-item">
          <FooterNav nav="About" />
          </li>
          <li className="nav-item">
          <FooterNav nav="Services" />
          </li>
          <li className="nav-item">
          <FooterNav nav="Blog" />
          </li>
          <li className="nav-item">
          <FooterNav nav="Contact Me" />
          </li>
        </ul>
        <p style={{ textAlign: "center" }}>
          Copyright 2025 © By Prakash
        </p>
      </footer>

      <div className="container py-2 pb-0 mx-auto foot"></div>
    </section>
  );
};
