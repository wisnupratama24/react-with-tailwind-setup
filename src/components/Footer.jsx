import React from "react";
import Brand from "parts/Brand";

export default function Footer(props) {
  return (
    <div className="lg:px-16 bg-white py-10">
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-1 px-5 ">
        <div className="pr-10">
          <Brand />
          <div className="text-gray-600 font-light py-2 md:py-1 ">
            Kepuasan anda adalah prioritas kami.
          </div>
        </div>
        <div className="md:mx-10 my-5 md:my-0">
          <ul className="footer-ul">
            <li className="footer-li-heading">Layanan Pelanggan</li>
            <li className="footer-li">Bantuan</li>
            <li className="footer-li">Customer Service</li>
            <li className="footer-li">Hubungi Kami</li>
            <li className="footer-li">Program</li>
          </ul>
        </div>
        <div className="md:mx-10 my-5 md:my-0">
          <ul className="footer-ul">
            <li className="footer-li-heading">JELAJAHI STADME</li>
            <li className="footer-li">Tentan Kami</li>
            <li className="footer-li">Karir</li>
            <li className="footer-li">Kebijakan</li>
            <li className="footer-li">Privacy Polici</li>
            <li className="footer-li">Blog</li>
            <li className="footer-li">Kontak Media</li>
          </ul>
        </div>
        <div className="md:mx-10 my-5 md:my-0">
          <ul className="footer-ul">
            <li className="footer-li-heading">Layanan Pelanggan</li>
            <li className="footer-li">Bantuan</li>
            <li className="footer-li">Customer Service</li>
            <li className="footer-li">Hubungi Kami</li>
            <li className="footer-li">Program</li>
          </ul>
        </div>
      </div>
      <div className=" text-gray-500 flex justify-center font-light md:my-16 my-8 ">
        Copyright 2019 • All rights reserved •
        <span className="font-bold"> STADME </span>
      </div>
    </div>
  );
}
