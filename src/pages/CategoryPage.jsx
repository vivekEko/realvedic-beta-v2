// React
import React from "react";

// Media Files
// media files
import product from "../assets/img/landingPage/category/rectangle.png";
import Footer from "../components/global/Footer";

const CategoryPage = () => {
  // products list
  const productsList = [
    {
      //   categoryName: "Shop All",
      categoryName: "Flour Packs",
      products: [
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
      ],
    },
    {
      categoryName: "Flour Pack",
      products: [
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Golden Milk | Turmeric Milk Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Angaya Podi ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Desi Chai Masala ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Garlic Rasam Powder | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Kokum Rasam | Instant Mix  ",
          weight: "250g",
          price: 110.0,
        },
        {
          productName: "Lemon Grass Rasam | Instant Mix ",
          weight: "250g",
          price: 110.0,
        },
      ],
    },
  ];

  // category list
  const categoryList = [
    {
      categoryName: "Spice Blends",
    },

    {
      categoryName: "Flour Packs",
    },
    {
      categoryName: "Dosa Mix",
    },

    {
      categoryName: "Rasam & Soups",
    },
    {
      categoryName: "Noodles & Pasta",
    },
    {
      categoryName: "Beverage Mixes",
    },
    {
      categoryName: "Shop All",
    },
  ];
  return (
    <div className="">
      {/* Mobile category carousel */}
      <div className="bg-white py-5 md:hidden flex justify-between items-center gap-5 overflow-x-scroll px-5">
        {categoryList?.map((data, index) => {
          return (
            <div key={index}>
              <div className=" w-[90px] aspect-square bg-[#D9D9D9] rounded-full "></div>
              <h1 className="text-sm text-center leading-4 mt-1 font-bold min-h-[50px]  w-[60%] mx-auto">
                {data?.categoryName}
              </h1>
            </div>
          );
        })}
      </div>
      {/* Banner */}
      <div className="h-[350px] bg-[#D9D9D9] ">
        <div className="bg-[#EFEFEF] md:bg-transparent md:h-full w-full  md:flex justify-start items-center">
          {" "}
          <h1 className="text-2xl font-bold py-5 w-[90%] mx-auto">
            {productsList[0]?.categoryName}
          </h1>{" "}
        </div>
        <div>{/*banner image */}</div>
      </div>

      <h1 className="text-[#797676] text-base w-[90%] mx-auto pt-5">
        {productsList[0]?.products?.length} products
      </h1>

      {/* Products list/grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 py-5 mb-20 w-[90%] mx-auto">
        {productsList[0]?.products?.map((data, index) => {
          return (
            <div key={index} className="group">
              <div className="w-full overflow-hidden ">
                <img
                  src={product}
                  alt="product"
                  className="w-full group-hover:scale-110 transition-all"
                />
              </div>

              <div className="flex justify-between items-start font-bold text-sm mt-5">
                <h1 className="flex-[0.6] leading-4 text-xs sm:text-sm md:text-base   md:leading-5">
                  {data?.productName}
                </h1>
                <div className="flex-[0.4]">
                  <h1 className="p-3 bg-[#ECECEC] w-fit ml-auto text-xs sm:text-sm md:text-base">
                    {data?.weight}
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="ml-auto w-fit my-2  text-xs sm:text-sm md:text-base">
                  Rs. {data?.price.toFixed(2)}
                </div>
                <div className="bg-[#D9D9D9] text-xs sm:text-sm md:text-base text-center font-bold p-2 px-8 w-fit ml-auto cursor-pointer active:scale-95 transition-all">
                  ADD TO CART
                </div>
                <div className="text-xs sm:text-sm md:text-base w-fit ml-auto mt-2 cursor-pointer underline-offset-4 hover:underline hidden md:block">
                  View Details
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore more products */}
      <div
        className={` ${
          productsList[0]?.categoryName === "Shop All" ? "hidden" : "block"
        }`}
      >
        <h1 className="text-2xl font-bold w-[90%] mx-auto text-center md:text-left mb-5">
          Explore more products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 py-5 mb-20 w-[90%] mx-auto">
          {productsList[1]?.products?.map((data, index) => {
            return (
              <div key={index} className="group">
                <div className="w-full overflow-hidden ">
                  <img
                    src={product}
                    alt="product"
                    className="w-full group-hover:scale-110 transition-all"
                  />
                </div>

                <div className="flex justify-between items-start font-bold text-sm mt-5">
                  <h1 className="flex-[0.6] leading-4 text-xs sm:text-sm md:text-base   md:leading-5">
                    {data?.productName}
                  </h1>
                  <div className="flex-[0.4]">
                    <h1 className="p-3 bg-[#ECECEC] w-fit ml-auto text-xs sm:text-sm md:text-base">
                      {data?.weight}
                    </h1>
                  </div>
                </div>
                <div className="">
                  <div className="ml-auto w-fit my-2  text-xs sm:text-sm md:text-base">
                    Rs. {data?.price.toFixed(2)}
                  </div>
                  <div className="bg-[#D9D9D9] text-xs sm:text-sm md:text-base text-center font-bold p-2 px-8 w-fit ml-auto cursor-pointer active:scale-95 transition-all">
                    ADD TO CART
                  </div>
                  <div className="text-xs sm:text-sm md:text-base w-fit ml-auto mt-2 cursor-pointer underline-offset-4 hover:underline hidden md:block">
                    View Details
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
