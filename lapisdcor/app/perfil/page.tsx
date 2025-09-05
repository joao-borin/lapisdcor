"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = { nome?: string; email: string; senha?: string };

export default function PerfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      router.replace("/login"); // sem login → volta pro login
      return;
    }
    try {
      setUser(JSON.parse(raw));
    } catch {
      localStorage.removeItem("user");
      router.replace("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("user");
    router.push("/"); // volta para a home
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[28rem]">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Meu Perfil</h1>

        <div className="space-y-3 text-black">
          <div>
            <span className="font-semibold">Nome:</span> {user.nome || "—"}
          </div>
          <div>
            <span className="font-semibold">E-mail:</span> {user.email}
          </div>
          <div>
            <span className="font-semibold">Senha:</span>{" "}
            {user.senha ? "••••••••" : "—"}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
