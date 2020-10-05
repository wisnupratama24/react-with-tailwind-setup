import React from "react";
import avatar from "assets/images/avatar.jpg";
import Star from "elements/Star";
export default function Reviews() {
  return (
    <div className="lg:w-10/12 w-full mx-auto  mt-10 bg-white p-10 rounded-lg">
      <div className="">
        <ul>
          <li className="text-xl text-gray-500 font-medium">
            {" "}
            <a href="/" className="hover:text-indigo-500">
              {" "}
              Ulasan Produk{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="mt-10 text-gray-700  justify-start w-full lg:w-10/12">
        <div className="block ">
          <div className="flex mb-16">
            <img
              src={avatar}
              className="w-12 h-12 rounded-full border border-gray-400 p-1 mr-5"
              alt="testimnoial-1"
            />
            <div className="flex flex-col w-8/12">
              <span className="mb-2">Wisnu Putra Pratama</span>
              <Star value={5} width={16} height={16} spacing={2} />
              <p className="mt-2">
                Eu laboris nisi deserunt veniam officia nulla ipsum. Elit dolor
                mollit veniam qui qui et elit voluptate do anim in. Ullamco quis
                nulla cillum anim enim quis do ullamco. Est quis reprehenderit
                aliquip commodo consectetur. Non aute dolore velit enim proident
                elit.
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <img
              src={avatar}
              className="w-12 h-12 rounded-full border border-gray-400 p-1 mr-5"
              alt="testimnoial-2"
            />
            <div className="flex flex-col w-8/12">
              <span className="mb-2">Wisnu Putra Pratama</span>
              <Star value={5} width={16} height={16} spacing={2} />
              <p className="mt-2">
                Eu laboris nisi deserunt veniam officia nulla ipsum. Elit dolor
                mollit veniam qui qui et elit voluptate do anim in. Ullamco quis
                nulla cillum anim enim quis do ullamco. Est quis reprehenderit
                aliquip commodo consectetur. Non aute dolore velit enim proident
                elit.
              </p>
            </div>
          </div>
          <div className="flex mb-16">
            <img
              src={avatar}
              className="w-12 h-12 rounded-full border border-gray-400 p-1 mr-5"
              alt="testimnoial-3"
            />
            <div className="flex flex-col w-8/12">
              <span className="mb-2">Wisnu Putra Pratama</span>
              <Star value={5} width={16} height={16} spacing={2} />
              <p className="mt-2">
                Eu laboris nisi deserunt veniam officia nulla ipsum. Elit dolor
                mollit veniam qui qui et elit voluptate do anim in. Ullamco quis
                nulla cillum anim enim quis do ullamco. Est quis reprehenderit
                aliquip commodo consectetur. Non aute dolore velit enim proident
                elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
