import About from "./components/About";
import Contact from "./components/Contact";
import MyHome from "./components/Home";
import Products from "./components/Products";
import ScrollRestoration from "./components/ScrollRestoration";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <ScrollRestoration />
      <MyHome />
      <About />
      <Services />
      <Products />
      <Contact />
    </>
  );
}
