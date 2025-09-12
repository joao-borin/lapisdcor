import Link from "next/link";

export default function BarraTopo() {
  return (
    <>
      <header className="bg-black text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">MinhaLoja</Link>
        </h1>
        <div className="flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full p-2 border border-gray-300 rounded-lg text-black bg-white"
          />
        </div>
        <div className="flex items-center space-x-10">
          <button className="flex items-center space-x-3 hover:text-gray-400">
            <span className="text-base">Carrinho</span>
          </button>
          <Link href="/login" aria-label="Login" className="flex flex-col items-center hover:text-gray-400">
            <span className="text-base">Login</span>
          </Link>
        </div>
      </header>
      <nav className="bg-[#3D3E3E] text-white grid grid-cols-5 divide-x divide-gray-600 text-center shadow">
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Materiais</button>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Suporte</button>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Livros</button>
        <Link href="/sobre" className="hover:bg-gray-700 py-4 text-lg w-full text-center">
          Sobre
        </Link>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Categorias</button>
      </nav>
    </>
  );
}