import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-gradient-to-br from-[#002776] from-70% to-[#003399] px-8 py-6 text-white shadow-card">
            <div className="flex flex-col items-center gap-4 px-8 py-6">
                <Image
                    src="/white-transparent.png"
                    alt="Brasil Transparente"
                    width={200}
                    height={50}
                    className="-mt-2 max-w-full"
                />
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-azul-brasil px-5 py-3 text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-amarelo-ouro hover:text-azul-brasil"
                >
                    Voltar
                </Link>
            </div>
        </header>
    );
}
