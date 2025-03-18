import { IoLocationSharp } from "react-icons/io5";
export default function Addresse() {
  return (
    <div className="items-center bg-white justify-center space-between w-auto m-3 p-3 sm:w-[38rem] mx-auto  overflow-hidden rounded-2xl sm:max-w-lg">
      <div className="   mx-auto px-auto  overflow-hidden rounded-2xl  sm:max-w-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16095.296037136353!2d7.432231320633183!3d36.45680746614186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOUEDI%20EL%20MAIZ%20CITE%2054%20COOPERATIF%20PROMOTIONELLE%20B%2006%20MAGAZIN%20N%2003%20%20%20%20%20%20%20%20%20%20%20WILAYA%20DE%20GUELMA%20-%20ALGERIE!5e1!3m2!1sfr!2sdz!4v1742267978847!5m2!1sfr!2sdz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-start ">
        <IoLocationSharp className=" w-18 h-10  mt-4 fill-red-500 " />
        <h1 className="mt-6 mb-6 text-black hover:text-red-500">
          OUEDI EL MAIZ CITE 54 COOPERATIF PROMOTIONELLE B 06 MAGAZIN N 03
          WILAYA DE GUELMA - ALGERIE
        </h1>
      </div>
    </div>
  );
}
