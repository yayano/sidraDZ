"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
export default function ImageContainer({
  image,
}: {
  image: StaticImageData[];
}) {
  const [index, setIndex] = useState(0);
  return (
    <div className="p-2 mt-4 ">
      <div className="">
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
  );
}
