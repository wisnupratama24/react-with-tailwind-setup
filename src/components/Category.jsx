import React from "react";
export default function Category({ data }) {
  return (
    <div className="md:px-10 px-2 md:py-5 py-2">
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 bg-white md:p-6 p-2 shadow-md">
        {data.map((item, index) => {
          return (
            <a href="/" key={`category-${index}`}>
              <div className="flex justify-center flex-col items-center md:m-2 m-1 border border-gray-300 hover:border-indigo-500">
                <img
                  className="md:h-20 h-10 md:my-4 my-2"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="w-10/12 md:pt-2 md:h-16 h-10 md:text-base text-xs text-center text-gray-700 font-light">
                  <span>{item.name}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
