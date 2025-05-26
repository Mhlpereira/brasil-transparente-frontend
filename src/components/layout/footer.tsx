import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#002776] to-[#075213] px-4 py-8 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                {/* Seção Explorar */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#ffdf00]">Explorar</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/sobre"
                                className="block transition-all hover:translate-x-1 hover:text-[#ffdf00]"
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/metodologia"
                                className="block transition-all hover:translate-x-1 hover:text-[#ffdf00]"
                            >
                                Metodologia
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/origem"
                                className="block transition-all hover:translate-x-1 hover:text-[#ffdf00]"
                            >
                                Origem dos Dados
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/brasil-transparente"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block transition-all hover:translate-x-1 hover:text-[#ffdf00]"
                            >
                                Repositório GitHub
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Seção Apoie o projeto */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#ffdf00]">Apoie o projeto</h3>
                    <div className="flex flex-wrap items-center gap-5">
                        {/* PayPal */}
                        <div className="mb-4">
                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                <input type="hidden" name="business" value="RMJXZN7M292FW" />
                                <input type="hidden" name="no_recurring" value="0" />
                                <input type="hidden" name="item_name" value="Brasil Transparente - Obrigado!" />
                                <input type="hidden" name="currency_code" value="BRL" />
                                <button type="submit">
                                    <Image
                                        src="/images/btn-paypal.png"
                                        alt="Doar via PayPal"
                                        width={120}
                                        height={40}
                                        className="h-auto w-full max-w-[120px]"
                                    />
                                </button>
                            </form>
                        </div>

                        {/* Bitcoin */}
                        <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
                            <Image
                                src="/images/bitcoin.png"
                                alt="Bitcoin"
                                width={40}
                                height={40}
                                loading="lazy"
                                className="h-10 w-10"
                            />
                            <div className="break-all text-sm">
                                <strong>Carteira Bitcoin:</strong>
                                <br />
                                bc1qhzz5hp3qz8ew5mkgzt5t65wa4pg8ewxdy6lyps
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-4 text-center text-sm">
                <p>
                    Transparência se constrói com dados ao alcance de todos | Contato:
                    <a href="mailto:brasiltransparente@pm.me" className="ml-1 underline">
                        brasiltransparente@pm.me
                    </a>
                </p>
            </div>
        </footer>
    );
}
