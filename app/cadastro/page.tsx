"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    // Simulação de cadastro: salva e já "loga"
    localStorage.setItem("user", JSON.stringify({ nome, email, senha }));
    router.push("/"); // volta pra home
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Cadastro</h1>

        <form className="space-y-4" onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={e => setNome(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-black"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-black"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black placeholder-black"
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
          >
            Criar conta
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-black">
          Já tem conta?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
