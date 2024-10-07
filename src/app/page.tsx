'use client';

import Card from "@/components/Card";
import Raffle from "@/components/Raffle";
import Info from "@/components/Info";

export default function Home() {

  return (
    <Card className="bg-cream flex flex-col justify-center items-center m-auto lg:w-8/12 h-fit p-8 my-20 shadow-2xl">

        <h1 className="text-navy-blue text-xl font-medium mb-8">Convidamos você a participar da nossa Rifa de Casa Nova, para nos ajudar a mobiliar a casa</h1>
        <div className="w-full flex flex-col lg:flex-row justify-evenly">
          <Info title="Prêmio" content="R$ 150,00" />
          <Info title="Cada número vale" content="R$ 20,00" />
          <Info title="Data do Sorteio" content="31/05/2025" />
        </div>

        <h2 className="text-navy-blue text-xl font-medium mb-4">Escolha um ou mais números abaixo e boa sorte ;)</h2>
        
        <Raffle />

        <h2 className="text-navy-blue text-lg font-medium mt-4">X pontos escolhidos - Realizar o pagamento</h2>
    </Card>
  );
}