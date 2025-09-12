"use client";
import React, { useEffect, useState } from "react";
import BarraTopo from "../components/barratopo";
import { useRouter } from "next/navigation";

type User = { nome?: string; email: string; senha?: string };

export default function PerfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [compras, setCompras] = useState<any[]>([]);
  const [vendas, setVendas] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      router.replace("/login");
      return;
    }
    setUser(JSON.parse(raw));

    // Busca compras e vendas
    const comprasRaw = localStorage.getItem("compras");
    const vendasRaw = localStorage.getItem("vendas");
    setCompras(comprasRaw ? JSON.parse(comprasRaw) : []);
    setVendas(vendasRaw ? JSON.parse(vendasRaw) : []);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/");
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <BarraTopo />
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-[28rem]">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">Perfil</h1>
          <div className="mb-8 text-black">
            <div>
              <span className="font-semibold">Nome:</span> {user.nome || "—"}
            </div>
            <div>
              <span className="font-semibold">E-mail:</span> {user.email}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="border rounded p-6 bg-gray-50 text-center">
              <div className="font-bold text-lg mb-2">Vendas</div>
              <div className="text-gray-600">
                {vendas.length === 0
                  ? "Nenhuma venda registrada."
                  : `Total de vendas: ${vendas.length}`}
              </div>
            </div>
            <div className="border rounded p-6 bg-gray-50 text-center">
              <div className="font-bold text-lg mb-2">Compras</div>
              <div className="text-gray-600">
                {compras.length === 0
                  ? "Nenhuma compra registrada."
                  : (
                    <>
                      <div>Total de compras: {compras.length}</div>
                      <ul className="mt-2 text-left text-xs">
                        {compras.map((item, idx) => (
                          <li key={idx}>{item.nome}</li>
                        ))}
                      </ul>
                    </>
                  )}
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}