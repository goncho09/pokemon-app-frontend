/*eslint quote-props: ["always"]*/

import Image from "next/image";

export default function Pokemon({ pokemon }) {
  {
    console.log(pokemon);
  }
  const showTypes = (listOfTypes) => {
    let list = [];
    listOfTypes.map((types) => {
      list.push(types.type.name);
    });
    return <p> {list.join(" , ")}</p>;
  };

  return (
    <section className="mt-12 bg-[#9B3922] rounded-lg p-5 flex items-center flex-col">
      <h1 className="uppercase text-xl font-semibold">{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={120}
        height={100}
        objectFit="contain"
        priority
      />
      <div className="flex flex-col mt-3">
        <div className="flex">
          <p className="mr-2">Tipo :</p>
          {showTypes(pokemon.types)}
        </div>
        <p>Vida : {pokemon.stats[0].base_stat}</p>
        <p>Ataque : {pokemon.stats[1].base_stat}</p>
        <p>Defensa : {pokemon.stats[2].base_stat}</p>
        <p>Ataque especial : {pokemon.stats[3].base_stat}</p>
        <p>Defensa especial : {pokemon.stats[4].base_stat}</p>
        <p>Velocidad : {pokemon.stats[5].base_stat}</p>
      </div>
    </section>
  );
}
