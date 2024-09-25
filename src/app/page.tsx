'use client';

import Card from "@/components/Card";
import Raffle from "@/components/Raffle";

export default function Home() {

  return (
    <Card className="bg-cream flex flex-col justify-center items-center m-auto md:w-8/12 h-fit p-8 my-20">
        <h1 className="text-navy-blue text-2xl font-medium mb-8">Convidamos você a participar da nossa Rifa de Casa Nova, para nos ajudar a mobiliar a casa</h1>
        <Raffle />
    </Card>
  );
}