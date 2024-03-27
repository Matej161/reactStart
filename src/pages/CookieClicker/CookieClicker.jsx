import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CookieClicker.css"

export default function CookieClicker() {
  //[nazev_promenne, setter] = usestate(vychozi hodnota);
  const [cookies, setCookies] = useState(0);

  const increaseCookies = () => {
    setCookies(cookies + 1);
  }

  useEffect(() => {
    document.title = "Bohatovo susenky nacteny"
  }, []); // pokud jsou [] prazdne - funkce se spusti po nacteni stranky


  useEffect(() => {
    document.title = cookies;
  }, [cookies]); // pokud se v [] cokoliv zmeni - zmeni svoji hodnotu - provede se funkce

  return (
    <>
      <button className="cookieclicker-button" onClick={increaseCookies}>Bohata</button>
      <p className="cookieclicker-counter">Cookies: {cookies} </p>
      <Link className="cookieclicker-link" to={"/"}>Go home</Link>
    </>
  );
}
