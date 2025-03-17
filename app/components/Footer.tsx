import React from "react";
import { Footer } from "flowbite-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
export default function zMyFooter() {
  return (
    <Footer container id="help" className="bg-purpleColor ">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="/" src={logo} alt="Lilfat Logo" name="Lilfat" />
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#" className="text-white">
                  Lilfat
                </Footer.Link>
                <Footer.Link href="#">Produit alimentaire</Footer.Link>
                <Footer.Link href="#">
                  22 Rue sidi moussa Boufarik w-blida
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  djoudicompany@lilfatdc.com
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  chems05djoudi@gmail.com
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  0660-836-783
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  0675-901-656
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  0559-106-703
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
          <Footer.Copyright
            href="#"
            className="text-white"
            by="Yahia™"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="#" className="text-white" icon={BsFacebook} />
            <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
            <Footer.Icon href="#" className="text-white" icon={BsTwitter} />
            <Footer.Icon href="#" className="text-white" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
