import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Bohata from "./Bohata/Bohata";
import Ahoj from "./Ahoj/Ahoj";
import Papa from "./Papa/Papa";
import A from "./A/A";
import B from "./B/B";
import C from "./C/C";
import D from "./D/D";
import E from "./E/E";
import Error from "./Error/Error"
import CookieClicker from "./CookieClicker/CookieClicker";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bohata" element={<Bohata />} />
          <Route path="/ahoj" element={<Ahoj />} />
          <Route path="/papa" element={<Papa />} />
          <Route path="/a" element={<A/>} />
          <Route path="/b" element={<B/>} />
          <Route path="/c" element={<C/>} />
          <Route path="/d" element={<D/>} />
          <Route path="/e" element={<E/>} />
          <Route path="/cookieclicker" element={<CookieClicker/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
