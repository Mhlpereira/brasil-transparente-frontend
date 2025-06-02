type ButtonProps = {
    data: {
        nome: string;
        color: string;
    };
};

export default function Button({ data }: ButtonProps) {
    return (
        <button className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4 flex items-center justify-between hover:scale-105 transition-transform duration-300">
            <span className="text-[#002776]">{data.nome}</span>
        </button>
    );
}
