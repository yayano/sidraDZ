import React from "react";
import { Footer } from "flowbite-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
export default function zMyFooter() {
  return (
    <Footer container id="help" className="bg-red-500 rounded-none ">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image width={100} height={100} src={logo} alt="Lilfat Logo" />
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#" className="text-white">
                  EURL SIDRA DZ
                </Footer.Link>
                <Footer.Link href="#">Société d&apos;exportation</Footer.Link>
                <Footer.Link href="#">ouedi el maiz Guelma Algérie</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Contact" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  merouane@sidradz.com
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  merouane@gmail.com
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  0770-809-485
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  0770-809-485
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
        <Footer.Divider className="m-2" />
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
