"use client";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import logo from "@/app/assets/logo.svg";
export default function MyHome() {
  return (
    <div className="bg-neutralSilver mt-2 mb-4" id="home">
      <div className="px-4 lg:mb-20 lg:px-14 max-w-screen-2x1 mx-auto  min-h-screen h-screen ">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/50 ">
              <div className="hero md:w-1/2 absolute z-100 bg-transparentColor rounded-xl p-4 left-8">
                <h1 className="text-3xl font-bold mb-4 text-neutralDGrey md:w-3/4 leading-snug p-6 mt-8">
                  Votre Partenaire de Confiance
                  <span className="text-white leading-snug block p-2 text-2xl">
                    pour l'Exportation de Produits à Base de Calcium.
                  </span>
                </h1>

                <p className="text-white text-justify text-base mb-8 p-4  ">
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
                  <Link to="products" spy={true} smooth={true}>
                    <button className="btn-secondary">Demander un devis</button>
                  </Link>
                </div>
              </div>
              {/**second half */}
              <div className="hero md:w-1/4 absolute z-100 bg-transparentColor rounded-xl p-4 right-20 bottom-10 lg:block sm:hidden md:hidden hidden">
                <h1 className="text-2xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug p-4">
                  Qualité, Fiabilité et Expertise au Service de Votre Industrie
                  <span className="text-white leading-snug block">
                    Votre Partenaire de Confiance pour l’Exportation de Minéraux
                    de Qualité
                  </span>
                </h1>
                <p className="text-white text-base mb-8 p-4 ">
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
    </div>
  );
}
