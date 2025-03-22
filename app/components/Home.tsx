"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { QrCode, WhatsAppLogo } from "@/app/constants/index";
import Image from "next/image";
export default function MyHome() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    console.log("useEffect");
  }, []);
  return (
    <div className="bg-neutralSilver mt-2 overflow-hidden" id="home">
      <div
        className={`px-4  lg:mb-20 lg:px-14 sm:px-5  mx-auto  min-h-screen h-screen ${
          show ? "opacity-60" : ""
        }`}
      >
        <div className="flex h-full items-center justify-center ">
          <div className="relative w-screen h-screen overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className=" relative z-10 flex items-center  justify-center w-full h-full bg-black/50  ">
              <div className="hero md:w-1/2 absolute z-100  bg-transparentColor rounded-xl md:p-4 p-2 m-2 md:left-8">
                <h1 className=" text-xl md:text-xl lg:text-3xl font-bold  text-neutralDGrey md:w-3/4 leading-snug md:p-6 mt-8">
                  Votre Partenaire de Confiance
                  <span className="text-white leading-snug m-0 block p-1 text-base">
                    Pour l&apos;Exportation de Produits à Base de Calcium.
                  </span>
                </h1>

                <p className="text-white text-justify text-xs  lg:text-base  mb-8 p-4  ">
                  Spécialistes dans l’extraction, la transformation et
                  l’exportation de produits minéraux riches en calcium, nous
                  mettons à votre disposition des solutions adaptées aux besoins
                  des industries de la construction, de l’agriculture, de la
                  chimie et bien d’autres secteurs. Grâce à notre expertise et à
                  nos infrastructures modernes, nous garantissons des matières
                  premières d’une pureté exceptionnelle, conformes aux normes
                  internationales les plus strictes. Que vous recherchiez du
                  carbonate de calcium, de la chaux ou d’autres dérivés, nous
                  assurons un contrôle rigoureux de la qualité, une traçabilité
                  complète et des services logistiques optimisés pour une
                  livraison rapide et fiable à l’échelle mondiale. Faites
                  confiance à notre savoir-faire pour des produits minéraux
                  performants et adaptés à vos exigences industrielles.
                </p>
                <div className="flex items-start gap-4">
                  <Link to="products" spy={true} smooth={true}>
                    <button className="btn-primary">
                      Découvrez nos produits
                    </button>
                  </Link>
                  <Link to="/" spy={true} smooth={true}>
                    <button
                      className="btn-secondary"
                      onClick={() => setShow(true)}
                    >
                      Demander un devis
                    </button>
                  </Link>
                </div>
              </div>
              {/**second half */}
              <div className="hero md:w-1/3 absolute z-100 bg-transparentColor rounded-xl p-4 right-20 bottom-10 lg:block sm:hidden md:hidden hidden">
                <h1 className="text-xl xl:text-2xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug p-4">
                  Qualité, Fiabilité et Expertise au Service de Votre Industrie
                  <span className="text-white leading-snug block">
                    Votre Partenaire de Confiance pour l’Exportation de Minéraux
                    de Qualité
                  </span>
                </h1>
                <p className="text-white text-base xl:text-xl mb-8 p-4 ">
                  Nous nous engageons à fournir des produits minéraux de haute
                  qualité, rigoureusement sélectionnés et conformes aux normes
                  internationales. Grâce à notre expertise et à nos
                  infrastructures modernes, nous accompagnons les industries du
                  monde entier en leur garantissant des solutions performantes,
                  adaptées à leurs besoins spécifiques. Découvrez nos gammes de
                  produits et profitez d’un service sur mesure pour une
                  collaboration durable et fructueuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="z-9999  fixed inset-0 px-1 bg-transparent bg-opacity-50  h-auto w-full flex items-center justify-center opacity-100 ">
          <div className="p-8 border  w-18/19 h-screen  md:w-1/2 lg:w-1/3  shadow-lg rounded-md bg-white relative">
            <div className="text-left ">
              <h3 className="text-2xl  font-bold text-red-500 p-3  ">
                Contactez-nous
              </h3>
              {/* Navigates back to the base URL - closing the modal */}
              <button
                onClick={() => setShow(false)}
                className="px-4 py-2 bg-transparent border-2 border-red-500 absolute right-4 top-4 text-red-500 text-xl  font-bold rounded-full shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                X
              </button>

              <div className="mt-2 px-2 py-3 text-gray-500">
                <p className="md:text-lg text-xs p-1">
                  Pour obtenir un devis précis, veuillez fournir le numéro CAS,
                  la quantité requise et les exigences de qualité du produit.
                </p>
                <h4 className="md:text-lg text-xs p-1 font-bold ">
                  Contact : <span className="font-normal">0770-809-485</span>
                </h4>
                <h4 className="md:text-lg text-xs p-1 font-bold ">
                  WhatsApp : <span className="font-normal">0770-809-485</span>
                </h4>
                <h4 className="md:text-lg text-xs p-1 font-bold ">
                  Email : <span className="font-normal">0770-809-485</span>
                </h4>
                <h4 className="md:text-lg text-xs p-1 font-bold ">
                  Address :{" "}
                  <span className="md:text-lg text-xs">
                    OUEDI EL MAIZ CITE 54 COOPERATIF PROMOTIONELLE B 06 MAGAZIN
                    N 03 WILAYA DE GUELMA - ALGERIE
                  </span>
                </h4>
                <div className="p-4 bg-gray-400">
                  <p className="text-black font-semibold">
                    N&apos;hésitez pas à nous écrire sur WhatsApp pour une
                    assistance immédiate !
                  </p>
                  <Image src={WhatsAppLogo} alt="whatsapp" />
                </div>
                <div className="p-4 bg-gray-400 flex justify-center items-center">
                  <p className="text-black font-semibold p-2">
                    Si vous utilisez WhatsApp !
                  </p>
                  <Image src={QrCode} alt="whatsapp" />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <p>Merci!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
