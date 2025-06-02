'use client';
import { useFormattedNumber } from "@/hooks/hover-valor";

type CardDividasProps = {
    data: {
        orgao: string;
        totalGasto: number;
    };
}



export default function CardDividas({data} : CardDividasProps ){
    const { displayValue, fullValue, onMouseEnter, onMouseLeave } = useFormattedNumber(data.totalGasto);

    return (
        <>
            <article className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
                <header>
                    <h2 className="text-xl">{data.orgao}</h2>
                </header>
                    <dt 
                    className="font-semibold cursor-help"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    title={fullValue}>
                    {displayValue}
                    </dt>
            </article>
        </>
    )
        
}