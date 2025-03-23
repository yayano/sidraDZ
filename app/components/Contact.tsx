"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Addresse from "./Addresse";
export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || !(form.current instanceof HTMLFormElement)) {
      console.error("Form reference is null or incorrect type");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.log("Misiing EmailJS ENV");
    } else {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("success");
            form.current?.reset();
          },
          (error) => console.log("Failed", error)
        );
    }
    console.log("submitting");
    return;
  };
  return (
    <div
      className="text-center flex items-center justify-center space-between flex-cols-2 flex-wrap "
      id="contact"
    >
      <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
        <div className="bg-red-500 px-10 py-10 text-center text-white">
          <p className="font-serif text-2xl font-semibold tracking-wider">
            Contactez Nous !!
          </p>
          <p className="text-center text-blue-100">
            Veuillez le garder court et succinct.
          </p>
        </div>

        <form className="space-y-4 px-8 py-10" onSubmit={sendEmail} ref={form}>
          <label className="block" htmlFor="name">
            <p className="text-gray-600 text-left">Nom</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-orange-400 focus:ring-1"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </label>
          <label className="block" htmlFor="name">
            <p className="text-gray-600 text-left">Addresse Email</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-red-500 focus:ring-1"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label className="block" htmlFor="name">
            <p className="text-gray-600 text-left">Numéro de Téléphone</p>
            <input
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-red-500 focus:ring-1"
              type="Number"
              name="contactNo"
              placeholder="Enter your Phone Number"
            />
          </label>
          <label className="block" htmlFor="name">
            <p className="text-gray-600 text-left">Méssage</p>
            <textarea
              className="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-red-500 focus:ring-1"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              name="message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="mt-4 rounded-full bg-red-500 px-10 py-2 font-semibold text-white"
          >
            Envoyez
          </button>
        </form>
      </div>
      <Addresse />
    </div>
  );
}
