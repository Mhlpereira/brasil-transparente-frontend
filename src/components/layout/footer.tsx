import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div >
                <div>
                    <h3>Explorar</h3>
                    <ul>
                        <li>
                            <Link href="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link href="/metodologia">Metodologia</Link>
                        </li>
                        <li>
                            <Link href="/origem">Origem dos Dados</Link>
                        </li>
                        <li>
                            <a href="https://github.com/brasil-transparente" target="_blank" rel="noopener noreferrer">
                                Repositório GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Apoie o projeto</h3>
                    <div className="donation-container">
                        <div className="paypal-wallet">
                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                <input type="hidden" name="business" value="RMJXZN7M292FW" />
                                <input type="hidden" name="no_recurring" value="0" />
                                <input type="hidden" name="item_name" value="Brasil Transparente - Obrigado!" />
                                <input type="hidden" name="currency_code" value="BRL" />
                                <Image src="/images/btn-paypal.png" width={100} height={40} alt="Doar via PayPal" />
                            </form>
                        </div>
                        <div className="bitcoin-wallet">
                            <Image src="/images/bitcoin.png" alt="Bitcoin" width={40} height={40} loading="lazy" />
                            <div>
                                <strong>Carteira Bitcoin:</strong>
                                <br />
                                bc1qhzz5hp3qz8ew5mkgzt5t65wa4pg8ewxdy6lyps
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Transparência se constrói com dados ao alcance de todos | Contato: brasiltransparente@pm.me</p>
            </div>
        </footer>
    );
}
