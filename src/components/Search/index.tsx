export default function Search() {
  return (
    <form className="flex justify-center flex-col items-center mt-48">
      <h2 className="text-lg mb-4">Buscar un pokemon ...</h2>
      <input
        type="search"
        className="w-[30%] h-8 text-black indent-2 rounded-md outline-none"
      />
    </form>
  );
}
