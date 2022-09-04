// React
import React, { useEffect, useState } from "react";

// Components
import Carousel from "../components/productPage/1_carousel/Carousel";

// Media files
import tick from "../assets/img/productPage/quantity_select/tick.svg";
import vector1 from "../assets/img/productPage/desc/fire.svg";
import vector2 from "../assets/img/productPage/desc/molecule.svg";
import vector3 from "../assets/img/productPage/desc/herbel.svg";
import product from "../assets/img/landingPage/category/rectangle.png";
import Footer from "../components/global/Footer";
import Carousel2 from "../components/productPage/1_carousel/Carousel2";

const ProductPage = () => {
  const productDetails = [
    {
      productName: "Kokum Rasam",
      size1: "250g|500g|1kg",
      price1: "110|220|440",
      size: ["250g", "500g", "1kg"],
      price: [110, 220, 440],

      desc: [
        {
          title: "Benefits",
          contents:
            "rich nutrients , anti-oxidants, Contains garcinol, Improves acidity, Improves indigestion, Helps in anxiety and depression",
        },

        {
          title: "Ingredients",
          contents:
            "Kokum Rind, Cumin Seeds, Whole Red Chilli, Coriander Seeds, Pigeon Peas, Whole Dry Turmeric, Tamarind, Curry Leaves, Asafoetida",
        },

        {
          title: "How we use it?",
          contents:
            "Add 2 teaspoons of RealVedic Kokum Rasam Powder to 2 cups of water. Bring it to boil and add salt to taste. Simmer for 5 minutes. For Tempering – Heat a teaspoon of ghee/oil in a tempering pan. Add 1/4th teaspoon mustard seeds. When the seeds start to pop, add the tempering to the rasam. Optionally you can garnish with chopped fresh coriander leaves for better experience. Enjoy your Kokum Rasam as a soup with your favourite papad or with hot rice!",
        },

        {
          title: "How we make it?",
          contents:
            "We prefer manufacturing our products in small batches to maintain the standard and quality. Each ingredient is handpicked carefully and then roasted to perfection. It is then blended and stored in a clean and hygienic place before it is delivered to your doorstep.",
        },
      ],

      nutritional_info: [
        {
          title: "Total Fat",
          value: "3.2 g",
        },
        {
          title: "Protien",
          value: "10 g",
        },
        {
          title: "Carbohydrate",
          value: "70.2 g",
        },
        {
          title: "Energy",
          value: "348.6 kcal",
        },
      ],
    },
  ];

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

  // Local variable
  const [sizeArray, setSizeArray] = useState();
  const [priceArray, setPriceArray] = useState();
  const [selectedSizeArray, setSelectedSizeArray] = useState([]);
  const [selectedPriceArray, setSelectedPriceArray] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // Extracting price and size from api
  useEffect(() => {
    productDetails?.map((data, index) => {
      return setSizeArray(data?.size1.split("|"));
    });

    productDetails?.map((data, index) => {
      return setPriceArray(data?.price1.split("|"));
    });
  }, []);

  // function to remove selected text from array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek != value;
    });
  }

  return (
    <div>
      <div className="md:flex justify-center items-center gap-5 md:mb-10 w-[90%] mx-auto">
        <div className="  md:w-[60%] max-w-[600px]  mx-auto px-[30px]  md:pb-[100px]  ">
          <Carousel2 />
        </div>

        {/* Product select */}
        <div className="w-[90%] mx-auto md:w-[350px] lg:w-[400px] xl:w-[500px] md:mr-auto md:ml-0  py-5 ">
          {productDetails?.map((data, index) => {
            return (
              <div key={index}>
                <h1 className="text-2xl font-extrabold my-2">
                  {data?.productName}
                </h1>

                <h3 className="font-semibold">Pack Sizes</h3>

                <div className="mt-5">
                  {priceArray?.map((data, index) => {
                    return (
                      <div key={index}>
                        <div
                          className={` ${
                            !selectedPriceArray?.includes(data)
                              ? "bg-[#FCF55C]"
                              : "bg-[#90c047]"
                          } flex justify-between items-center    mb-2 font-bold h-full cursor-pointer`}
                          onClick={() => {
                            if (selectedPriceArray?.includes(data)) {
                              setSelectedPriceArray(
                                arrayRemove(selectedPriceArray, data)
                              );
                            } else {
                              setSelectedPriceArray((selectedPriceArray) => [
                                data,
                              ]);
                            }
                          }}
                        >
                          <h3 className="p-4">{sizeArray[index]}</h3>
                          <h3 className="p-4">₹ {data}</h3>
                          <div className="bg-[#00000033]  h-full p-[1.4rem] flex justify-center items-center">
                            <img src={tick} alt="..." className=" w-[15px]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Add to cart */}
                <div className="flex justify-between items-center my-10">
                  <div
                    onClick={() => {
                      if (quantity > 0) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className="w-[50px] flex justify-center items-center text-3xl border-[#C57963] border-[1px] aspect-square cursor-pointer"
                  >
                    -
                  </div>
                  <div className="bg-[#FCF55C] flex-1 text-center py-4 font-bold cursor-pointer">
                    {quantity > 0 ? quantity : "ADD TO CART"}
                  </div>
                  <div
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-[50px] flex justify-center items-center text-3xl border-[#C57963] border-[1px] aspect-square cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product desc */}
      <div className="w-[90%] mx-auto">
        <div className="flex justify-start items-center gap-5 mb-10">
          <img src={vector1} alt="..." className="w-[40px]" />
          <img src={vector2} alt="..." className="w-[40px]" />
          <img src={vector3} alt="..." className="w-[40px]" />
        </div>
        <div>
          {productDetails?.map((data, index) => {
            return (
              <div key={index}>
                <div>
                  {data?.desc?.map((data, index) => {
                    return (
                      <div key={index} className="mt-8">
                        <h1 className="font-bold text-lg mb-2">
                          {data?.title}
                        </h1>
                        <p className="text-base text-[#545454]">
                          {data?.contents}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* nutitional value */}

        <div className="my-10  max-w-[400px]">
          {productDetails?.map((data, index) => {
            return (
              <div key={index}>
                <div className="text-[#6D6D6D] border border-[#6D6D6D] ">
                  <h1 className="font-extrabold border-b border-b-[#6d6d6d] p-5 text-lg">
                    Nutritional Info per 100g (Approx)*
                  </h1>

                  {data?.nutritional_info?.map(
                    (nutritionalData, nutritionalIndex) => {
                      return (
                        <div
                          key={nutritionalIndex}
                          className="grid grid-cols-2 justify-items-center items-center"
                        >
                          <h1 className="font-extrabold border-b border-b-[#6d6d6d] p-5 w-full text-left border-r border-r-[#6d6d6d] text-[#7D7D7D]">
                            {nutritionalData?.title}
                          </h1>
                          <h1 className="font-extrabold border-b border-b-[#6d6d6d] p-5 w-full text-right text-[#4A4A4A]">
                            {nutritionalData?.value}
                          </h1>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
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

export default ProductPage;
