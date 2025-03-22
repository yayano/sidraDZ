import ImageContainer from "@/app/components/ImageContainer";
import { ProductsItems } from "../../constants/index";

import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function getData(id: string) {
  const data = ProductsItems.filter((data) => data.id.toString() === id);
  return data;
}
type Params = Promise<{ id: string }>;
export default async function ProductDetails({ params }: { params: Params }) {
  const { id } = await params;
  const data = getData(id);
  const { name, description, image, application } = data[0];
  return (
    <div className="flex gap-5 m-10 mt-15 flex-wrap  ">
      <ImageContainer image={image} />
      <div className="w-[400px] mt-7">
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
          <li>{application}</li>
          <li>{description}</li>
        </ul>

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
