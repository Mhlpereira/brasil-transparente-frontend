import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#002776] to-[#075213]">
            <div className="">
                <div className="flex">
                    <nav className="w-1/2">
                        <h3 className="text-xl font-semibold" style={{ color: "#ffdf00" }}>
                            Explorar
                        </h3>
                        <ul className="space-y-4 list-none">
                            <li>
                                <Link
                                    href="/sobre"
                                    style={{ color: "white", textDecoration: "none" }}
                                    className="transition-all duration-300 hover:translate-x-1 inline-block hover:!text-[#ffdf00]"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/metodologia"
                                    style={{ color: "white", textDecoration: "none" }}
                                    className="transition-all duration-300 hover:translate-x-1 inline-block hover:!text-[#ffdf00]"
                                >
                                    Metodologia
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/origem"
                                    style={{ color: "white", textDecoration: "none" }}
                                    className="transition-all duration-300 hover:translate-x-1 inline-block hover:!text-[#ffdf00]"
                                >
                                    Origem dos Dados
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/brasil-transparente"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "white", textDecoration: "none" }}
                                    className="transition-all duration-300 hover:translate-x-1 inline-block hover:!text-[#ffdf00]"
                                >
                                    Repositório GitHub
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="w-1/2">
                        <h3 className="text-xl font-semibold mb-6" style={{ color: "#ffdf00" }}>
                            Apoie o projeto
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="business" value="RMJXZN7M292FW" />
                                    <input type="hidden" name="no_recurring" value="0" />
                                    <input type="hidden" name="item_name" value="Brasil Transparente - Obrigado!" />
                                    <input type="hidden" name="currency_code" value="BRL" />
                                    <button
                                        type="submit"
                                        className="bg-transparent p-0 border-0 cursor-pointer"
                                        style={{ background: "transparent", border: "none", padding: 0 }}
                                    >
                                        <Image
                                            src="/btn-paypal.png"
                                            alt="Doar via PayPal"
                                            width={120}
                                            height={40}
                                            className="h-auto max-w-[120px]"
                                        />
                                    </button>
                                </form>
                            </div>

                            <div className="rounded-lg p-4 shadow-lg bg-white/90 w-auto">
                                <div className="flex items-center">
                                    <Image
                                        src="/bitcoin.png"
                                        alt="Bitcoin"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 flex-shrink-0"
                                    />
                                    <address className="min-w-0 flex-1">
                                        <p className="text-gray-700 font-semibold mb-1">Carteira Bitcoin:</p>
                                        <p className="text-gray-600 text-sm break-all font-mono">
                                            bc1qhzz5hp3qz8ew5mkgzt5t65wa4pg8ewxdy6lyps
                                        </p>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center">
                    <p style={{ color: "white" }} className="text-sm">
                        Transparência se constrói com dados ao alcance de todos | Contato:&nbsp;
                        <a
                            href="mailto:brasiltransparente@pm.me"
                            style={{ color: "white", textDecoration: "underline" }}
                            className="hover:!text-[#ffdf00] transition-colors duration-300"
                        >
                            brasiltransparente@pm.me
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
