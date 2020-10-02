import React from "react";
import formatNumber from "utils/formatNumber";
import Star from "elements/Star";
export default function Content({ data, isFilter, length, limit }) {
  return (
    <div className="md:px-10 mx-0 py-10">
      <div
        className={`grid ${
          isFilter === true
            ? "xl-grid-cols-5 lg:grid-cols-5"
            : " xl:grid-cols-6 lg:grid-cols-4 "
        } md:grid-cols-3  grid-cols-2 `}
      >
        {data.slice(0, limit).map((item, index) => {
          return (
            <a href="/" key={`category-${index}`}>
              <div className="flex justify-center flex-col items-center m-2 border border-gray-300 bg-white shadow-lg rounded-lg">
                <img
                  className="md:h-64 h-40 md:w-10/12 w-11/12 mt-4"
                  src={item.imageUrl[0].url}
                  alt={item.name}
                />
                <div className="w-10/12 text-base my-4 text-gray-600">
                  <div className=" h-12">
                    <span>
                      {item.name.length > length
                        ? `${item.name.substring(0, length - 3)}...`
                        : item.name}
                    </span>
                  </div>
                  <span className="block font-bold text-red-500 mt-4 text-xl">
                    Rp. {formatNumber(item.price)}
                  </span>
                  <div className="flex justify-between mt-3">
                    <div className="w-5">
                      <Star
                        value={item.rating}
                        width={16}
                        height={16}
                        spacing={2}
                      />
                    </div>
                    <div className="text-gray-500  text-sm">
                      <span>{item.review} Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <a
        className="flex rounded border-indigo-500 border md:w-4/12 w-6/12 py-1 lg:py-3 mx-auto md:mt-10 mt-5 bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-500 font-medium justify-center "
        href="/"
      >
        Lihat lainnya
      </a>
    </div>
  );
}
