import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      
      <Contact />
    </>
  );
}
