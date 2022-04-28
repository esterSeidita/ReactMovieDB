import { useState } from "react";
import "./style.css";

export default function SearchInput({ setFilter }) {
  const [input, setInput] = useState("");
  const change = (e) => {
    setInput(e.target.value);
    setFilter(e.target.value);
  };
  return <input className="searchInput" type="text" value={input} onChange={change} />;
}
