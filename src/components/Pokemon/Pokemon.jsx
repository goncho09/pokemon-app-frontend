/*eslint quote-props: ["always"]*/

import Image from "next/image";
import Link from "next/link";

import { FaHeart, FaShield, FaWandMagic } from "react-icons/fa6";
import { GiCrossedSwords, GiShieldImpact, GiWalkingBoot } from "react-icons/gi";

export default function Pokemon({ pokemon }) {
  const showTypes = (listOfTypes) => {
    let list = [];
    listOfTypes.map((types) => {
      list.push(types.type.name);
    });
    return <p> {list.join(" , ")}</p>;
  };

  return (
    <section className="mt-12 bg-[#9B3922] rounded-lg p-5 flex items-center flex-col select-none">
      <h1 className="uppercase text-xl font-semibold">{pokemon.name}</h1>
      <Link
        href={{
          pathname: "/pokemon",
          query: pokemon.id,
        }}
      >
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={120}
          height={100}
          objectFit="contain"
          priority
        />
      </Link>
      <div className="flex flex-col mt-3">
        <div className="flex items-center">
          <p className="mr-2">Tipo :</p>
          {showTypes(pokemon.types)}
        </div>
        <div className="flex items-center">
          <FaHeart className="mr-2 text-red-600 text-xl" />
          <p>Vida : {pokemon.stats[0].base_stat}</p>
        </div>
        <div className="flex items-center">
          <GiCrossedSwords className="mr-2  text-xl" />
          <p>Ataque : {pokemon.stats[1].base_stat}</p>
        </div>
        <div className="flex items-center">
          <FaShield className="mr-2  text-xl text-green-500" />
          <p>Defensa : {pokemon.stats[2].base_stat}</p>
        </div>
        <div className="flex items-center">
          <FaWandMagic className="mr-2  text-xl text-yellow-500" />
          <p>Ataque especial : {pokemon.stats[3].base_stat}</p>
        </div>
        <div className="flex items-center">
          <GiShieldImpact className="mr-2  text-xl text-orange-600 " />
          <p>Defensa especial : {pokemon.stats[4].base_stat}</p>
        </div>
        <div className="flex items-center">
          <GiWalkingBoot className="mr-2  text-xl text-blue-700 " />
          <p>Velocidad : {pokemon.stats[5].base_stat}</p>
        </div>
      </div>
    </section>
  );
}
