import React from "react";
export default function Category({ data }) {
  return (
    <div className="px-10 py-5">
      <div className="grid md:grid-cols-8 grid-cols-2 bg-white p-6 shadow-md">
        {data.map((item, index) => {
          return (
            <a href="/" key={`category-${index}`}>
              <div className="flex justify-center flex-col items-center m-2 border border-gray-300">
                <img
                  className="md:h-20 h-10 my-4"
                  src={item.imageUrl}
                  alt={item.name}
                />
                <div className="w-8/12 md:pt-2 md:h-16 h-10 md:text-base text-xs text-center text-gray-700 font-light">
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
