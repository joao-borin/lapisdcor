"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Caneta Escolar",
    descricao: "Caneta azul para uso escolar.",
    preco: 2.5,
    imagem: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    nome: "Lápis de Cor",
    descricao: "Caixa com 12 lápis de cor.",
    preco: 10.0,
    imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    nome: "Mochila Escolar",
    descricao: "Mochila resistente para o dia a dia.",
    preco: 89.9,
    imagem: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
  }
];

export default function HomePage() {
  const [user, setUser] = useState<{ nome?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      setUser(JSON.parse(raw));
    }
  }, []);

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
          <Link href={user ? "/perfil" : "/login"} aria-label="Login" className="flex flex-col items-center hover:text-gray-400">
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
            <span className="text-base">
              {user ? user.nome?.split(" ")[0] : "Login"}
            </span>
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

      {/* Main Content - Produtos em destaque */}
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Produtos em destaque</h2>
        <div className="flex gap-8 flex-wrap">
          {produtos.map((produto) => (
            <div key={produto.id} className="border rounded-lg p-4 w-56 bg-white shadow">
              <img src={produto.imagem} alt={produto.nome} className="w-full h-32 object-cover rounded" />
              <h3 className="mt-2 font-bold text-lg">{produto.nome}</h3>
              <p className="text-sm">{produto.descricao}</p>
              <strong className="block mt-2 text-green-700">R$ {produto.preco.toFixed(2)}</strong>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}