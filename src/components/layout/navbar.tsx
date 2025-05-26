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
                            União federal
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Resumo de gastos
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/" className="text-lg font-semibold">
                            Gastos detalhados
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </>
    )
}
