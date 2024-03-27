import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Bohata</h1>
      <Link to={"/cookieclicker"}>
        <p>cesta na kuki klikr</p>
      </Link>
    </>
  );
}