'use client';

import Card from "@/components/Card";
import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { pixCodeGenerator } from "@/utils/PixCodeGenerator";

export default function Teste() {
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(20.0);

  useEffect(() => {
    setValor(quantidade * 20.0);
  }, [quantidade]);

  const handleSelecionarProduto = () => {
    setQuantidade(quantidade + 1);
  };

  const valorFormatado = valor.toFixed(2).toString();

  const pixCode = pixCodeGenerator(valorFormatado);

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
    </Card>
  );
}
