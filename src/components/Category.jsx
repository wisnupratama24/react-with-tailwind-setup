import React from "react";
export default function Category({ data }) {
  return (
    <div className="md:px-10 px-2 md:py-5 pt-5">
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 bg-white md:p-1 p-2 shadow-md lg:p-1">
        {data.map((item, index) => {
          return (
            <a href="/" key={`category-${index}`}>
              <div className="flex justify-center flex-col items-center md:m-2 m-1 border border-gray-300 hover:border-indigo-500">
                <img
                  className="lg:h-20 md:h-16 h-10 lg:my-4 md:mt-4 md:mb-2 my-2"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="w-10/12 lg:pt-2 md:pt-1 lg:h-16 md:h-12 h-10 lg:text-base md:text-sm text-xs text-center text-gray-700 font-light">
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
