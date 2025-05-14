import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import "./index.css"
import { MainSection } from "./MainSection";
import { Navbar } from "./Navbar";
import Preloader from "./PreLoader";
import { Project } from "./Projects";
import { Services } from "./Services";

export const App=()=>{
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <MainSection />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}