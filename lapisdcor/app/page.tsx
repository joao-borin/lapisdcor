import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">MinhaLoja</Link>
        </h1>

        {/* Search Bar */}
        <div className="flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full p-2 border border-gray-300 rounded-lg text-black bg-white"
          />
        </div>

        {/* Buttons: Carrinho e Login */}
        <div className="flex items-center space-x-10">
          {/* Botão Carrinho */}
          <button className="flex items-center space-x-3 hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="7" cy="21" r="2" />
              <circle cx="17" cy="21" r="2" />
            </svg>
            <span className="text-base">Carrinho</span>
          </button>

          {/* Botão Login com ícone e texto abaixo */}
          <Link href="/login" aria-label="Login" className="flex flex-col items-center hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="10" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a8.38 8.38 0 0113 0" />
            </svg>
            <span className="text-base">Login</span>
          </Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-[#3D3E3E] text-white grid grid-cols-5 divide-x divide-gray-600 text-center shadow">
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Materiais</button>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Suporte</button>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Livros</button>
        <Link href="/sobre" className="hover:bg-gray-700 py-4 text-lg w-full text-center">
          Sobre
        </Link>
        <button className="hover:bg-gray-700 py-4 text-lg w-full">Categorias</button>
      </nav>


      {/* Main Content Placeholder */}
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Produtos em destaque</h2>
        <p>Conteúdo de produtos vai aqui...</p>
      </main>
    </div>
  );
}
