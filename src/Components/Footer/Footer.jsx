import React from "react";
import { assets } from "../../assets/assets";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#001931] text-white p-10">
        <aside>
          <a href="/" className="font-bold text-xl flex items-center gap-3">
            <img className="w-11" src={assets.logo} alt="logo" />
            <span className="bg-clip-text text-white">
              HERO.IO
            </span>
          </a>
          <p>
            Hero.io Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

         <nav>
          <h6 className="footer-title">Social Icon</h6>
          <div className="flex gap-3 text-2xl">
            <a className="link link-hover" href=""><CiFacebook /></a>
            <a className="link link-hover" href=""><FaInstagram /></a>
            <a className="link link-hover" href=""><FaTwitter /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
