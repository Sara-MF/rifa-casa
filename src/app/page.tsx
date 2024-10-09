'use client';

import Card from "@/components/Card";
import Raffle from "@/components/Raffle";
import Info from "@/components/Info";
import { remainingTime } from '../utils/RemainingTime';
import { useEffect, useState } from "react";

export default function Home() {

  const initialTimeLeft: any = remainingTime('2025-05-31');

  const [timeLeft, setTimeLeft] = useState(remainingTime(initialTimeLeft));

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTimeLeft(remainingTime('2025-05-31'));
      }, 1000);

      return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="bg-cream flex flex-col justify-center items-center m-auto lg:w-8/12 h-fit p-8 my-20 shadow-2xl">

        <h1 className="text-navy-blue text-xl font-medium mb-8">Convidamos você a participar da nossa Rifa de Casa Nova, para nos ajudar a mobiliar a casa</h1>
        <div className="w-full flex flex-col items-center justify-center mb-8 gap-10">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
            <Info title="Prêmio" className="items-center lg:w-1/5">R$ 150,00</Info>
            <Info title="Cada número vale" className="items-center lg:w-1/5">R$ 20,00</Info>
          </div>
          <Info title="Data do Sorteio" subtitle="Sábado, 31 de Maio de 2025" className="items-start lg:w-1/3">
            <div className="flex w-full gap-3 mt-4">
              <div className="bg-orange w-16 h-16 rounded-lg text-cream text-lg flex flex-col items-center justify-center">
                <p>{timeLeft.days}</p>
                <p>dias</p>
              </div>
              <div className="bg-orange w-16 h-16 rounded-lg text-cream text-lg flex flex-col items-center justify-center">
                <p>{timeLeft.hours}</p>
                <p>horas</p>
              </div>
              <div className="bg-orange w-16 h-16 rounded-lg text-cream text-lg flex flex-col items-center justify-center">
                <p>{timeLeft.minutes}</p>
                <p>min</p>
              </div>
              <div className="bg-orange w-16 h-16 rounded-lg text-cream text-lg flex flex-col items-center justify-center">
                <p>{timeLeft.seconds}</p>
                <p>seg</p>
              </div>
            </div>
          </Info>
          
        </div>

        <h2 className="text-navy-blue text-xl font-medium mb-4">Escolha um ou mais números abaixo e boa sorte ;)</h2>
        
        <Raffle />

        <div className="mt-6 flex flex-col gap-4">
            <h2 className="text-navy-blue text-lg font-medium">X pontos escolhidos </h2>
            <button className="bg-green text-cream p-2 rounded-md active:translate-y-1">
                Realizar Pagamento
            </button>
        </div>

    </Card>    
  );
}