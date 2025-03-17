import About from "./components/About";
import Contact from "./components/Contact";
import MyHome from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <MyHome />
      <About />
      <Services />
      <Products />
      <Contact />
    </>
  );
}
