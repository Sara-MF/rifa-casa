import Card from "./Card";
import { useState } from 'react';

export default function Raffle() {

    const initialColors = Array(100).fill('bg-cream text-navy-blue hover:bg-light-green hover:text-cream');

    const [colors, setColors] = useState(initialColors);

    function handleClick(index: number) {

        const newColors = [...colors];
        newColors[index] = newColors[index] === 'bg-cream text-navy-blue hover:bg-light-green hover:text-cream' ? 'bg-green text-cream' : 'bg-cream text-navy-blue hover:bg-light-green hover:text-cream';
        setColors(newColors);
    }

    const tickets = Array.from({ length: 100 }, (_, index) => (
        <div key={index}
            className={`${colors[index]} w-9 h-9 rounded-full flex justify-center items-center cursor-pointer`}
            onClick={() => handleClick(index)}>
        {index + 1}
        </div>
    ));

    return (
        <>
            <Card className="bg-khaki grid grid-cols-5 md:grid-cols-10 h-fit w-fit place-items-center gap-5 p-4">
                {tickets}
            </Card>
        </>
    )
}