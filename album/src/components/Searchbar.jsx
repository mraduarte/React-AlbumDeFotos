import React from "react";

function Searchbar() {
  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar fotos..." />
      <button>Pesquisar</button>
      <select>
        {categorias.map((categoria) => (
          <option value={categoria} key={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Searchbar;
