"use client";

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Pokemon from "../Pokemon/Pokemon";

export default function Search() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pokemon, setPokemon] = useState({});

  async function onSubmit(event) {
    event.preventDefault();
    const linkToFetch = `http://localhost:3000/api/pokemon/${search}`;
    const response = await fetch(linkToFetch, { method: "GET" });

    if (response.ok) {
      setPokemon(await response.json());
      setError(false);
      setIsSubmitted(true);
      return;
    }

    setError(true);
  }

  return (
    <form
      className="flex justify-center flex-col items-center mt-48"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg mb-4">Buscar un pokemon ...</h2>
      <div className="flex w-[30%] h-8 justify-center text-black ">
        <input
          type="search"
          className=" indent-2 w-[80%] rounded-l-lg outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="submit"
          className="bg-white p-2 rounded-r-lg "
          onClick={() => onSubmit}
        >
          <FaMagnifyingGlass />
        </button>
      </div>

      {error && <h3 className="mt-4 bold text-lg">¡Este pokemon no existe!</h3>}

      {isSubmitted && <Pokemon pokemon={pokemon} className="mt-5" />}
    </form>
  );
}
