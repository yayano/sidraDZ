"use client";
import { Link } from "react-scroll";
import aboutImage2 from "@/app/assets/aboutImg.jpg";
import Image from "next/image";
export default function About() {
  return (
    <div id="about">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-25  z-999">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl  font-semibold mb-4 md:w-4/5 text-red-500">
              À Propos de Nous
            </h2>
            <p className="md:w-4/5 text-sm text-neutralDGray mb-8 ">
              Depuis notre création, nous nous engageons à fournir des minéraux
              de haute qualité aux marchés internationaux. Spécialisés dans
              l&apos;exportation du calcium et d&apos;autres minéraux
              essentiels, nous garantissons des produits conformes aux normes
              les plus strictes en matière de pureté et de performance. Grâce à
              une expertise approfondie et un réseau logistique optimisé, nous
              assurons une livraison fiable et rapide à travers le monde. Notre
              mission est d&apos;accompagner nos clients avec des solutions sur
              mesure adaptées à leurs besoins industriels, tout en respectant
              les normes environnementales et de durabilité.
            </p>
            <ul className="block p-2 ">
              <li className="p-2">
                🔺 Qualité supérieure – Des contrôles rigoureux à chaque étape
              </li>
              <li className="p-2">
                🔺 Fiabilité et engagement – Un service client à l’écoute
              </li>
              <li className="p-2">
                🔺Exportation mondiale – Une logistique optimisée pour des
                livraisons sans faille
              </li>
            </ul>
            <Link to="contact" spy={true} smooth={true} offset={-100}>
              <button className="btn-primary mt-4">Nous contacter</button>
            </Link>
          </div>
          <div>
            <Image
              src={aboutImage2}
              alt=""
              className=" rounded-full w-96 h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
