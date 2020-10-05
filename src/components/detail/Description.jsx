import React from "react";
import ReactHtmlParser from "react-html-parser";
export default function Description({ data }) {
  return (
    <div className="w-full lg:w-10/12 mx-auto h-full bg-white p-10 rounded-lg">
      <div className="">
        <ul>
          <li className="text-xl text-gray-500 font-medium">
            {" "}
            <a href="/" className="hover:text-indigo-500">
              {" "}
              Deskripsi Produk{" "}
            </a>{" "}
          </li>
          <li></li>
        </ul>
      </div>
      <div className="mt-10 text-gray-700  justify-start w-full lg:w-10/12">
        {ReactHtmlParser(data)}
      </div>
    </div>
  );
}
