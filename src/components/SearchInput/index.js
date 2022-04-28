import { useState } from "react";
import styles from "./style.module.scss";

export default function SearchInput({ setFilter }) {
  const [input, setInput] = useState("");
  const change = (e) => {
    setInput(e.target.value);
    setFilter(e.target.value);
  };
  return (
    <div className={styles.SearchInput}>
      <label htmlFor="filter">Cerca:</label>
      <input
        className={styles.searchInput}
        id="filter"
        placeholder="ex. Deadpool"
        type="text"
        value={input}
        onChange={change}
      />
    </div>
  );
}
