import { Outlet, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import {
  Intro, Navbar, Services, Solution, Sponsors, About
} from "./components"

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Intro />
        <div>
          <Navbar />
          <About />
          <Services />
          <Solution />
          <Sponsors />
        </div>
      </>} />







    </Routes >

  );
}