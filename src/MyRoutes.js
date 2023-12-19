import { Outlet, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import {
  Intro, Navbar, Services, Solution, Sponsors, About
} from "./components"
import FAQ from "./components/FAQ";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Intro />
        <div className="relative">
          <Navbar />
          <About />
          <Services />
          <Solution />
          <Sponsors />
          
        </div>
        <FAQ/>
      </>} />







    </Routes >

  );
}