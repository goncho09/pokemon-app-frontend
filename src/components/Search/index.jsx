"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    const linkToFetch = `http://localhost:3000/api/pokemon/${search}`;
    const response = await fetch(linkToFetch, {
      method: "GET",
    });

    if (response.status != 200) {
      console.log("error");
      setError(true);
    } else setError(false);
    const data = await response.json();
    // router.push('/pokemon',{query});
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
    </form>
  );
}
