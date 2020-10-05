import React, { useState } from "react";

export default function Filter({ data }) {
  const [openTab, setOpenTab] = useState({
    isToggle1: true,
    isToggle2: true,
    isToggle3: true,
  });
  return (
    <>
      <div className="flex flex-wrap ">
        <h2 className="text-xl font-medium flex md:mt-0 mt-4 justify-between items-center uppercase">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={20}
            className="mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter{" "}
        </h2>
        <div className="w-full bg-white rounded-lg shadow-sm my-2">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 lg:flex-col flex-col"
            role="tablist"
          >
            <li className="mx-5">
              <a
                className="flex items-center justify-between font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab({
                    ...openTab,
                    isToggle1: !openTab.isToggle1,
                  });
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Kategori
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={10}
                  height={10}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d={
                      openTab.isToggle1 === true
                        ? "M19 9l-7 7-7-7"
                        : "M5 15l7-7 7 7"
                    }
                  />
                </svg>
              </a>
            </li>
            <div className="relative flex flex-col rounded">
              <div className="px-3 pb-2 pt-4 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab.isToggle1 === true ? "block" : "hidden"}
                    id="link1"
                  >
                    {data.map((item, index) => {
                      return (
                        <div
                          className="md:flex md:items-center mb-2 ml-0"
                          key={`category-${index}`}
                        >
                          <label className="block">
                            <input
                              className="m-2 leading-tight"
                              type="checkbox"
                            />
                            <span className="text-sm">{item.name}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <li className="mx-5">
              <a
                className={"flex items-center justify-between font-medium"}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab({
                    ...openTab,
                    isToggle2: !openTab.isToggle2,
                  });
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Harga
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={10}
                  height={10}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d={
                      openTab.isToggle2 === true
                        ? "M19 9l-7 7-7-7"
                        : "M5 15l7-7 7 7"
                    }
                  />
                </svg>
              </a>
            </li>

            <div className="relative flex flex-col rounded">
              <div className="px-5 py-2 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab.isToggle2 === true ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="md:flex md:items-center mb-2 ml-0">
                      <label className="block">
                        <input className="m-2 leading-tight" type="checkbox" />
                        <span className="text-sm">Tertinggi</span>
                      </label>
                    </div>
                    <div className="md:flex md:items-center mb-2 ml-0">
                      <label className="block">
                        <input className="m-2 leading-tight" type="checkbox" />
                        <span className="text-sm">Terendah</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
