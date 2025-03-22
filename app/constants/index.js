import logo from "../assets/logo.png";
import WhatsAppLogo from "../assets/WhatsApp_logo.png";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import QrCode from "../assets/QrCode.png";
import aboutImage from "../assets/aboutimage.png";
import aboutImage2 from "../assets/aboutImg.jpg";
import emailImage from "../assets/email.png";
import mobileImage from "../assets/mobile.png";

import product0 from "../assets/2n_traite.png";
import product1 from "../assets/2n_bb.png";
import product2 from "../assets/2n_sac.png";
import product3 from "../assets/10n_vrac.png";
import product4 from "../assets/5n_bb.png";
import product5 from "../assets/10n_sac.png";
import product6 from "../assets/50_bb.png";
import product7 from "../assets/5n_sac.png";
import product8 from "../assets/15n_bb.png";
import product9 from "../assets/10n_bb.png";
import product10 from "../assets/800_v.png";
import product11 from "../assets/200_vrac.png";
import product12 from "../assets/200_bb.png";
import product13 from "../assets/150_vrac.png";
import product14 from "../assets/150_bb.png";

import bexCarb10N from "../assets/fiches tecnique/bexcarb10N.jpg";
import bexCarb5N from "../assets/fiches tecnique/bexcarb5N.jpg";
import bexCarb2N from "../assets/fiches tecnique/bexcarb2N.jpg";
import bexCarb150 from "../assets/fiches tecnique/bexcarb150.jpg";
import bexCarb2T from "../assets/fiches tecnique/bexcarb2T.jpg";
import bexCarb50 from "../assets/fiches tecnique/bexcarb50.jpg";
export const ServiceItems = [
  {
    id: 1,
    title: "Exportation des produits agricoles alimentaires 🌾🍏",
    description:
      " Exportation de divers produits alimentaires d'origine agricole avec une haute qualité.",
    image: company2,
  },
  {
    id: 2,
    title:
      "Exportation des matières synthétiques et manufacturées (sauf hydrocarbures) 🏭🚛",
    description:
      " Exportation de divers produits fabriqués et matériaux synthétiques de haute qualité, à l'exception des hydrocarbures.",
    image: company2,
  },
  {
    id: 3,
    title:
      "Exportation de toutes les matières non spécifiées ailleurs (sauf hydrocarbures) 🚛📦 ",
    description:
      "Comprend l’exportation d’une variété de produits et de matériaux ne relevant d’aucune catégorie spécifique, à l’exception des hydrocarbures.",
    image: company3,
  },
  {
    id: 4,
    title: "Exportation des matériaux de construction 🏗️  ",
    description:
      " Inclut l’exportation de divers matériaux utilisés dans le bâtiment, tels que le ciment, le fer, les briques et le verre, avec une haute qualité.",
    image: company3,
  },
  {
    id: 5,
    title: "Exportation de l’électricité ⚡  ",
    description:
      "Comprend l’exportation d’énergie électrique vers les marchés étrangers conformément aux normes internationales.>",
    image: company3,
  },
  {
    id: 6,
    title: "Entreprise d'exportation 🌍🚢",
    description:
      " Société spécialisée dans l’exportation de divers produits et matériaux vers les marchés internationaux, en garantissant qualité et efficacité selon les normes internationales.",
    image: company3,
  },
  {
    id: 7,
    title: "Exportation des services liés au secteur commercial 💼📦",
    description:
      " Comprend la prestation de services commerciaux spécialisés pour les marchés internationaux, tels que le conseil, le marketing et le soutien logistique, afin de renforcer les opérations commerciales transfrontalières.",
    image: company3,
  },

  {
    id: 8,
    title: "Exportation des services liés au secteur industriel 🏭🔧",
    description:
      " Comprend la fourniture de services industriels spécialisés aux marchés internationaux, tels que la maintenance, le conseil en ingénierie et la formation technique, pour soutenir et développer les activités industrielles.",
    image: company3,
  },
  {
    id: 9,
    title: "Exportation des services liés au secteur agricole 🌾🚜",
    description:
      " Comprend la fourniture de services agricoles spécialisés aux marchés internationaux, tels que le conseil en agriculture, le soutien technique et la formation aux technologies modernes pour améliorer la productivité.",
    image: company3,
  },
  {
    id: 10,
    title: "Exportation des services liés au secteur énergétique ⚡🛢️",
    description:
      " Comprend la fourniture de services spécialisés dans le domaine de l’énergie aux marchés internationaux, tels que le conseil, la maintenance et l’ingénierie énergétique, pour soutenir le développement et la durabilité des projets énergétiques.",
    image: company3,
  },
  {
    id: 11,
    title: "Exportation des déchets ménagers et similaires 🗑️♻️",
    description:
      " Comprend l’exportation des déchets ménagers et assimilés, en mettant l’accent sur le recyclage et la valorisation durable conformément aux normes environnementales.",
    image: company3,
  },
  {
    id: 12,
    title: "Exportation des déchets spéciaux 🏭♻️",
    description:
      " Comprend l’exportation des déchets industriels, médicaux et dangereux, dans le respect des normes environnementales et en garantissant leur traitement de manière sûre et durable.",
    image: company3,
  },
  {
    id: 13,
    title: "Exportation des services numériques 🌍💻",
    description:
      "  Comprend la fourniture de solutions numériques aux marchés internationaux, telles que le développement de logiciels, les services de cloud computing, le marketing digital et le conseil technologique.",
    image: company3,
  },
];

export const ProductsItems = [
  {
    id: 1,
    name: "BexCarb2T",
    application: "Utilisé pour le traitement et le raffinage du calcium.",
    description:
      "Un produit de haute pureté destiné aux industries nécessitant un calcium traité de qualité.",
    image: [product0, bexCarb2T, product0],
  },
  {
    id: 2,
    name: "BexCarb2N",
    application: "Convient pour l’agriculture et l’industrie chimique.",
    description:
      "Un produit conditionné en sacs pour faciliter son transport et son stockage.",
    image: [product2, bexCarb2N],
  },
  {
    id: 3,
    name: "2N BB",
    application: "Utilisé dans la construction et le traitement des sols.",
    description:
      "Produit en big bag pour une manipulation aisée dans les grands chantiers.",
    image: [product1],
  },
  {
    id: 4,
    name: "Bexcarb5N",
    application: "Industriel et chimique.",
    description:
      "Produit raffiné, emballé en sacs pour répondre aux exigences de précision.",
    image: [product7, bexCarb5N],
  },
  {
    id: 5,
    name: "5N BB",
    application: "Industrie du verre et céramique.",
    description:
      "Big bag de calcium 5N pour une utilisation industrielle de haute précision.",
    image: [product4],
  },
  {
    id: 6,
    name: "Bexcarb 10N ",
    application: "Industrie pharmaceutique et chimique.",
    description:
      "Produit de grande pureté conditionné en sacs pour un usage spécifique.",
    image: [product5, bexCarb10N],
  },
  {
    id: 7,
    name: "10N BB",
    application: "Secteur industriel et métallurgique.",
    description:
      "Conditionné en big bag pour répondre aux besoins des industries lourdes.",
    image: [product9],
  },
  {
    id: 8,
    name: "10N VRAC",
    application: "Grandes industries nécessitant une forte consommation.",
    description: "Produit livré en vrac pour minimiser les coûts logistiques.",
    image: [product3],
  },
  {
    id: 9,
    name: "15N BB",
    application: "Utilisation en sidérurgie et production de matériaux.",
    description:
      "Big bag de calcium à haute concentration pour des applications spécifiques.",
    image: [product8],
  },
  {
    id: 10,
    name: "BexCarb50 BB",
    application: "Industrie des matériaux de construction.",
    description:
      "Produit emballé en big bag de 50 unités pour des besoins en grande quantité.",
    image: [product6, bexCarb50],
  },
  {
    id: 11,
    name: "BexCarb150 BB",
    application: "Production industrielle et chimie lourde.",
    description:
      "Produit en big bag de 150 unités pour optimiser la logistique.",
    image: [product14, bexCarb150],
  },
  {
    id: 12,
    name: "150 VRAC",
    application:
      "Industries nécessitant de grandes quantités de matière première.",
    description:
      "Produit en vrac de 150 unités, idéal pour un usage industriel intensif.",
    image: [product13],
  },
  {
    id: 13,
    name: "200 BB",
    application: "Secteur de la construction et du traitement des minéraux.",
    description:
      "Big bag de 200 unités pour répondre aux grandes demandes industrielles.",
    image: [product12],
  },
  {
    id: 14,
    name: "200 VRAC",
    application: "Transport et stockage en grande quantité.",
    description:
      "Produit livré en vrac de 200 unités pour une logistique optimisée.",
    image: [product11],
  },
  {
    id: 15,
    name: "800V",
    application: "Industrie lourde et transformation des minéraux.",
    description:
      "Produit de très haute pureté pour des applications spécifiques.",
    image: [product10],
  },
];
export {
  logo,
  banner1,
  banner2,
  banner3,
  WhatsAppLogo,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  aboutImage,
  aboutImage2,
  emailImage,
  mobileImage,
  QrCode,
};
