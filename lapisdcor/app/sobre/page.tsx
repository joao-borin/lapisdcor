// app/sobre/page.tsx
import React from "react";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sobre o LapisDCor</h1>

        <p className="mb-4">
          O <strong>LapisDCor</strong> é um site de e-commerce criado para facilitar a
          compra e venda de materiais escolares. Ele foi pensado para oferecer uma
          plataforma prática, acessível e segura, onde clientes possam encontrar
          produtos com facilidade e pequenos lojistas possam vender online sem
          precisar investir em sistemas caros ou conhecimentos técnicos avançados.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Por que criamos este site?</h2>
        <p className="mb-4">
          Percebemos que, apesar do crescimento do comércio eletrônico, encontrar
          materiais escolares de forma simples e organizada ainda é um desafio. As
          grandes lojas virtuais raramente são especializadas nesse nicho, e as
          pequenas papelarias enfrentam dificuldades técnicas e financeiras para
          vender online. O resultado é que muitos consumidores não encontram o que
          precisam facilmente, e muitos lojistas deixam de alcançar novos clientes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">O que pretendemos solucionar?</h2>
        <p className="mb-4">
          O LapisDCor foi criado para resolver esses problemas oferecendo:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Um <strong>ambiente especializado</strong> em materiais escolares, 
            tornando a busca por produtos mais rápida e eficiente para o cliente.
          </li>
          <li>
            Uma <strong>plataforma acessível</strong> para que pequenos lojistas
            possam expor e vender seus produtos online sem complicação.
          </li>
          <li>
            Uma <strong>experiência de navegação simples e intuitiva</strong>, 
            baseada em boas práticas de design e usabilidade.
          </li>
        </ul>

        <p>
          Com isso, buscamos contribuir para a inclusão digital de pequenos
          empreendedores e tornar a compra de materiais escolares mais prática e
          agradável para todos.
        </p>
      </div>
    </div>
  );
}
