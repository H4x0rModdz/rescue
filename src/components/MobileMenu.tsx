"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SheetClose } from "./ui/sheet";

export function MobileMenu() {
	const path = usePathname();

	return (
		<nav>
			<ul className="flex flex-col gap-1">
				<li className="flex">
					<SheetClose asChild>
						<Link
							href="/"
							className={`w-full px-2 py-3 ${path === "/" ? "bg-white text-primary" : "text-white"}`}
						>
							Solicitar resgate
						</Link>
					</SheetClose>
				</li>

				<li className="flex">
					<SheetClose asChild>
						<Link
							href="/resgates"
							className={`w-full px-2 py-3 ${path === "/resgates" ? "bg-white text-primary" : "text-white"}`}
						>
							Solicitações de resgate
						</Link>
					</SheetClose>
				</li>

				<li className="flex">
					<SheetClose asChild>
						<Link
							href="/abrigos"
							className={`w-full px-2 py-3 ${path === "/abrigos" ? "bg-white text-primary" : "text-white"}`}
						>
							Abrigos
						</Link>
					</SheetClose>
				</li>

				<li className="flex">
					<SheetClose asChild>
						<Link
							href="/agua"
							className={`w-full px-2 py-3 ${path === "/agua" ? "bg-white text-primary" : "text-white"}`}
						>
							Água Potável
						</Link>
					</SheetClose>
				</li>

				<li className="flex">
					<SheetClose asChild>
						<Link
							href="/desaparecidos"
							className={`w-full px-2 py-3 ${path === "/desaparecidos" ? "bg-white text-primary" : "text-white"}`}
						>
							Desaparecidos
						</Link>
					</SheetClose>
				</li>

				<li className="flex">
					<SheetClose asChild>
						<Link
							href="tel:199"
							target="_blank"
							className={`w-full px-2 py-3 ${path === "tel:199" ? "bg-white text-primary" : "text-white"}`}
						>
							Defesa Civil
						</Link>
					</SheetClose>
					</li>

					<li className="flex">
					<SheetClose asChild>
						<Link
							href="tel:193"
							target="_blank"
							className={`w-full px-2 py-3 ${path === "tel:193" ? "bg-white text-primary" : "text-white"}`}
						>
							Bombeiros
						</Link>
					</SheetClose>
				</li>
			</ul>
		</nav>
	);
}
