import { IoLocationSharp } from "react-icons/io5";
export default function Addresse() {
  return (
    <div className="items-center bg-white justify-center space-between w-auto m-3 p-3 sm:w-[38rem] mx-auto  overflow-hidden rounded-2xl sm:max-w-lg">
      <div className="   mx-auto px-auto  overflow-hidden rounded-2xl  sm:max-w-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5991.25279359532!2d2.9007422935790954!3d36.572542899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f091436d61ccb%3A0xca4cf8036185f70f!2sCentre%20de%20ville%20BOUFARIK!5e1!3m2!1sfr!2sdz!4v1727742517873!5m2!1sfr!2sdz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-start ">
        <IoLocationSharp className=" w-8 h-8  mt-4 fill-brandPrimary " />
        <h1 className="mt-6 mb-6 text-purpleColor">
          22 Rue sidi moussa Boufarik w-blida
        </h1>
      </div>
    </div>
  );
}
