import Link from "next/link";
import { NavigationMenu,NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";


export default function Navbar() {

    return(
        <>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            reservado para logo
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Inicio
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Estados
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Metodologia
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Origem
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Sobre
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </>
    )
}
