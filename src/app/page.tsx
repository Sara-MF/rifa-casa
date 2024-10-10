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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

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
            <button className="bg-green text-cream p-2 rounded-md active:translate-y-1" onClick={() => {openModal();}}>
                Realizar Pagamento
            </button>
            {isModalOpen && (
              <div 
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                onClick={closeModal} 
              >
                <div 
                  className="w-11/12 lg:w-5/6 lg:h-80 flex flex-col lg:flex-row"
                  onClick={(e) => e.stopPropagation()}
                >
                    <div className="h-56 lg:h-full flex lg:w-3/4 lg:flex-col items-center justify-center
                                    rounded-t-lg lg:rounded-t-none lg:rounded-l-lg
                                    bg-repeat bg-auto " style={{ backgroundImage: "url('/imgs/bg-pattern-modal.png')" }}>

                      <div className="flex flex-col items-center justify-center bg-cream rounded-full gap-5 px-12 py-4 lg:px-20 lg:py-8">
                        <h1 className="text-navy-blue font-medium text-3xl lg:text-5xl tracking-widest">Rifa</h1>
                        <h2 className="text-navy-blue font-normal text-2xl lg:text-4xl tracking-widest">Casa Nova</h2>
                      </div>
                    </div>

                    <div className="lg:w-1/4 flex flex-col items-center justify-center bg-cream 
                                    border-dashed border-navy-blue border-t-2 lg:border-t-0 lg:border-l-2  
                                    rounded-b-lg lg:rounded-bl-none lg:rounded-br-lg lg:rounded-r-lg">

                      <div className="w-5/6 mt-10 lg:mt-0">
                        <h5 className="text-navy-blue text-lg font-medium mb-1">Nome:</h5>
                        <input type="text" className="w-full text-navy-blue mb-8 lg:mb-4 outline-none bg-transparent border-b-2 border-solid border-navy-blue" autoComplete="off" />
                        <h5 className="text-navy-blue text-lg font-medium mb-1">Telefone:</h5>
                        <input type="text" className="w-full text-navy-blue mb-8 lg:mb-4 outline-none bg-transparent border-b-2 border-solid border-navy-blue" autoComplete="off" />
                        <h5 className="text-navy-blue text-lg font-medium mb-1">Sua Chave Pix:</h5>
                        <input type="text" className="w-full text-navy-blue mb-8 lg:mb-6 outline-none bg-transparent border-b-2 border-solid border-navy-blue" autoComplete="off" />

                        <div className="flex justify-end mb-6 lg:mb-0">
                          <button className="bg-green text-cream p-2 rounded-md active:translate-y-1">
                              Avançar
                          </button>
                        </div>
                      </div>

                    </div>

                </div>

              </div>
            )}
        </div>

    </Card>    
  );
}