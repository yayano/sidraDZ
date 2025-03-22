import React from "react";
import { Footer } from "flowbite-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
export default function zMyFooter() {
  return (
    <Footer container id="help" className="bg-red-500 rounded-none ">
      <div className="w-full p-2 ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image width={100} height={100} src={logo} alt="Lilfat Logo" />
          </div>
          <div className="grid grid-cols-3 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-3 ">
            <div>
              <Footer.Title
                title="about"
                className="text-white text-xs md:text-base"
              />
              <Footer.LinkGroup
                col
                className="text-white text-xsm sm:text-base"
              >
                <Footer.Link href="#" className="text-white ">
                  EURL SIDRA DZ
                </Footer.Link>
                <Footer.Link href="#" className="text-white ">
                  Société d&apos;exportation
                </Footer.Link>
                <Footer.Link href="#" className="text-white ">
                  ouedi el maiz Guelma Algérie
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title
                title="Contact"
                className="text-white text-xs md:text-base "
              />
              <Footer.LinkGroup col className="text-xsm md:text-base">
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
              <Footer.Title
                title="Legal"
                className="text-white text-xs md:text-base"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-white text-xsm sm:text-base"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-white text-xsm sm:text-base"
                >
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
        </div>
      </div>
    </Footer>
  );
}
