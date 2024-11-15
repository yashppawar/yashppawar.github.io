"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { aquatico, dune_rise } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { socials } from "./footer";
import { Separator } from "./ui/separator";

const links: {
    name: string;
    link: string;
}[] = [
    {
        name: "projects",
        link: "#",
    },
    {
        name: "about",
        link: "#",
    },
    {
        name: "here",
        link: "#",
    },
];

export default function NewNavbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // setIsScrolled(true);
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            // className={cn(
            //     "fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl rounded-full transition-all duration-300 z-50 bg-slate-800/70 backdrop-blur-lg shadow-lg"
            // )}
            className={cn(
                "fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl rounded-[32px] transition-all duration-300 z-50", dune_rise.className, 
                isScrolled || isMenuOpen
                    ? "bg-slate-800/70 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white flex items-center translate-y-0.5">
                    <span>Yash</span>
                    {/* <span className={`${foundation_one.className}`}>Yash</span> */}
                </Link>
                <div className={cn("hidden space-x-6 md:flex")}>
                    {isScrolled && links.map((link) => (
                        <NavLink href={link.link} key={link.name}>
                            {link.name}
                        </NavLink>
                    ))}
                    {/* <NavLink href="/cosmos">cosmos</NavLink>
                    <NavLink href="/accessories">accessories</NavLink>
                    <NavLink href="/support">support</NavLink> */}
                </div>
                <div className="flex items-center space-x-4">
                    {/* {socials.map((social) => (
                        <NavLink href={social.link} key={social.name} className="hidden md:inline-block">{social.name}</NavLink>
                    ))} */}
                    <NavLink
                        href={socials[0].link}
                        key={socials[0].name}
                        className="hidden md:inline-block"
                    >
                        {socials[0].name}
                    </NavLink>
                    {/* <NavLink href="https://github.com/yashppawar" className="hidden md:inline-block">
                        account
                    </NavLink> */}
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link href="/tech-details">tech details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/cosmos">cosmos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/accessories">accessories</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/support">support</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/account">account</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                    <Button className="bg-teal-400 text-black rounded-full hover:bg-teal-500">
                        <ThemeToggle />
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div>
                    <Separator className="bg-slate-600" />
                    <div className="md:hidden px-6 pb-4 pt-2">
                        {links.map((link) => (
                            <NavLink
                                href={link.link}
                                key={link.name}
                                className={cn("block py-2")}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* <NavLink href="/tech-details" className="block py-2">
                        tech details
                        </NavLink>
                        <NavLink href="/cosmos" className="block py-2">
                        cosmos
                        </NavLink>
                        <NavLink href="/accessories" className="block py-2">
                        accessories
                        </NavLink>
                        <NavLink href="/support" className="block py-2">
                        support
                    </NavLink>
                    <NavLink href="/account" className="block py-2">
                        account
                    </NavLink> */}
                    </div>
                    <Separator className="bg-slate-600" />
                    <div className="md:hidden px-6 pb-4 pt-2">
                        {socials.map((link) => (
                            <NavLink
                                href={link.link}
                                key={link.name}
                                className={cn("block py-2")}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium text-white hover:text-gray-200 transition-colors",
                className
            )}
        >
            {children}
        </Link>
    );
}
