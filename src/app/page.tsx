import Card from "@/components/Card";

export default function Home() {

  const pontos = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="bg-[#F3F0DD] w-9 h-9 rounded-full text-[#1F4655] flex justify-center items-center cursor-pointer hover:bg-[#EC734B] hover:text-slate-50">
      {index + 1}
    </div>
  ));

  return (
    <div className="flex justify-center items-center h-screen">

      <Card className="w-5/12 h-4/5 grid grid-cols-10 place-items-center">
        {pontos}
      </Card>

    </div>
  );
}
