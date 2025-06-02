import Image from "next/image";
import Button from "./button";

export default function Header() {
    return (
        <header className="bg-gradient-to-br from-[#002776] from-70% to-[#003399] px-8 py-6 text-white shadow-card">
            <div className="flex flex-col items-center gap-4 px-8 py-6">
                <Image
                    src="/white-transparent.png"
                    alt="Brasil Transparente"
                    width={400}
                    height={200}
                    className="-mt-2 max-w-full"
                />
                <nav className="border-t border-white/20 mt-12 pt-8 text-center flex flex-row gap-3">
                    <Button data={{ nome: "União Federal", color: "#002776" }} />

                    <Button data={{ nome: "Resumo dos gatos", color: "#002776" }} />
                    <Button data={{ nome: "Gastos detalhados", color: "#002776" }} />
                </nav>
            </div>
        </header>
    );
}
