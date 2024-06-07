import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./LiveSearch.css"; // Импортируйте файл CSS

const LiveSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const items = [
    "Босо Лагман",
    "гуру лагман",
    "гюру ганфан",
    "Лагман",
    "Ганфан",
    "Чучбара",
    "Борщ",
    "Пельмен с сметаной",
    "Плов узгеский",
    "Манты",
    "плов (рис лазер)",
    "Манты жареные",
    "Гуляш с пюре",
    "Гулящ с рисом",
    "КотлетКотлета в кляре c пюре",
    "Котлет с гарниром",
   ];

  useEffect(() => {
    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <ul className="results-list">
        {results.map((item, index) => (
          <li key={index} className="results-item">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSearch;
