'use client';

import Card from "@/components/Card";
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { pixCodeGenerator } from "@/utils/PixCodeGenerator";

export default function Teste() {
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(20.0);

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [chavePix, setChavePix] = useState('');

  useEffect(() => {
    setValor(quantidade * 20.0);
  }, [quantidade]);

  const handleSelecionarProduto = () => {
    setQuantidade(quantidade + 1);
  };

  const valorFormatado = valor.toFixed(2).toString();

  const pixCode = pixCodeGenerator(valorFormatado);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    const response = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, chavePix }),
    });
  
    if (response.ok) {
      alert("Dados enviados com sucesso!");
      setNome("");
      setTelefone("");
      setChavePix("");
    } else {
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <Card className="bg-cream flex flex-col justify-center items-center m-auto lg:w-8/12 h-[800px] p-8 my-20 shadow-2xl">
      <div className="h-5/6 w-1/4">
        <div>
          <button className="bg-green text-cream p-2 rounded-md active:translate-y-1" onClick={handleSelecionarProduto}>Adicionar ponto</button>
          <p>Quantidade de pontos da rifa: {quantidade}</p>
          <p>Valor: R$ {valor.toFixed(2)}</p>
          <QRCode value={pixCode} />
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Chave Pix"
            value={chavePix}
            onChange={(e) => setChavePix(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Enviar</button>
        </form>
      </div>

    </Card>
  );
}
