"use client";
import { ProductsItems } from "../../constants/index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function getData(id: number) {
  let data = ProductsItems.filter((data) => data.id == id);
  return data;
}
type Params = {
  id: number;
};
export default function ProductDetails({ params }: { params: Params }) {
  const [index, setIndex] = useState(0);
  const { id } = params;
  const data = getData(id);
  const { name, description, image, application } = data[0];
  return (
    <div className="flex gap-10 m-10 mt-15 flex-wrap ">
      <div>
        <div className="image-container">
          <Image
            src={image && image[index]}
            alt="product"
            className="rounded-2xl bg-[#ebebeb] object-cover w-[400px] h-[400px] pointer transition-all duration-300  hover:bg-[#f02d34]  "
          />
        </div>
        <div className="flex gap-2.5 mt-2.5   ">
          {image?.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt="products"
              onMouseEnter={() => setIndex(i)}
              className={
                i === index
                  ? "small-image rounded-xl  w-17.5 h-17.5 cursor-pointer selected-image bg-[#f02d34]"
                  : "small-image rounded-xl bg-[#ebebeb] w-17.5 h-17.5 cursor-pointer"
              }
            />
          ))}
        </div>
      </div>

      <div className="w-[400px]">
        <h1>{name}</h1>
        <div className="text-[#f02d34] mt-2.5 flex gap-1.5 items-center   ">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p>(20)</p>
        </div>

        <ul className="text-sm space-x-9 mt-3">
          <p>{application}</p>
          <p>{description}</p>
        </ul>
        {/* <p>{description}</p> */}
        <Link
          href="/#products"
          className="flex items-center justify-center rounded-md bg-brandPrimary mt-5 px-5 py-2.5 
              text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none 
              focus:ring-4 focus:ring-blue-300"
        >
          Retour
        </Link>
      </div>
    </div>
  );
}
