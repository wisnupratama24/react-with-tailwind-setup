import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import image_product from "assets/images/product_1.jpg";
import useWindowDimensions from "utils/getWindowDimension";

export default function Hero() {
  const { width } = useWindowDimensions();
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 py-10 w-10/12 mx-auto">
        <div className="col-span-1">
          <img
            src={image_product}
            alt="gambar-detail"
            className="lg:w-10/12 block rounded-md md:h-full"
          />
        </div>
        <div className="col-span-1 xl:py-10 lg:py-5 mt-5 flex flex-col items-stretch">
          <h1 className="xl:text-3xl lg:text-xl text-sm font-medium md:font-medium  md:w-10/12 w-full uppercase">
            BAJU KAOS PRIA COTTON COMBED 30,s FASHION CASUAL PRIA BAJU DISTRO 04
            - Hitam, M
          </h1>
          <div className="md:mt-5 mt-2">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className="flex items-center">
                <span className="md:text-xl text-sm text-gray-500 md:pr-4 pr-2">
                  4.5
                </span>
                <Rating
                  name="read-only"
                  value={4.5}
                  precision={0.5}
                  readOnly
                  size={`${width <= 500 ? "small" : "medium"}`}
                />
                <span className="md:text-xl text-sm text-gray-500 md:pl-4 pl-2">
                  123 ( Ulasan )
                </span>
              </div>
            </Box>
          </div>
          <div
            className="flex items-baseline text-red-500 font-bold"
            style={{ marginTop: "-15px" }}
          >
            <span className="mr-4 lg:text-xl text-sm">Rp</span>
            <h1 className="xl:text-5xl lg:text-3xl md:text-3xl text-2xl">
              1.690.400
            </h1>
          </div>
          <div className="flex lg:mt-8 mt-4">
            <button className="bg-gray-500 text-white rounded xl:h-12 lg:h-8 lg:w-8 xl:w-12 h-6 w-6">
              <span className="xl:text-3xl lg:text-xl">-</span>
            </button>
            <input
              type="number"
              className="xl:h-12 lg:h-8 h-6 w-4/12 bg-gray-100 text-center"
            />
            <button className="bg-green-500 text-white rounded xl:h-12 lg:h-8 lg:w-8 xl:w-12 h-6 w-6">
              <span className="xl:text-3xl lg:text-xl">+</span>
            </button>
          </div>

          <div className="lg:flex hidden justify-between mt-10 w-5/12 py-4 border-t-2 border-b-2 border-gray-300">
            <div className="px-2">
              <span className="block text-gray-500 font-light mb-4">Berat</span>
              <span className="font-bold">160gr</span>
            </div>
            <div className="px-2">
              <span className="block text-gray-500 font-light mb-4">
                Kondisi
              </span>
              <span className="font-bold">Baru</span>
            </div>
            <div className="px-2">
              <span className="block text-gray-500 font-light mb-4">
                Asuransi
              </span>
              <span className="font-bold">Optional</span>
            </div>
          </div>

          <div className="lg:mt-10 mt-8">
            <button className="bg-transparent hover:bg-indigo-500 text-indigo-500 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-xs md:text-lg lg:w-3/12 w-4/12 mr-5">
              Beli Sekarang
            </button>
            <button className="bg-indigo-500  text-white font-medium py-2 px-4 rounded text-xs  md:text-lg lg:w-4/12 w-5/12">
              Masukan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
