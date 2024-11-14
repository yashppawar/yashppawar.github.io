import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { socials } from "./footer";
import { Separator } from "@radix-ui/react-separator";

const links = [
    {
        name: "Link",
        link: "#",
    },
    {
        name: "Link 2",
        link: "#",
    },
];

const firstSocial = socials[0];

export default function Navbar() {
    return (
        <nav className="sticky top-0 backdrop-blur-md z-50">
            <div className="navbar max-w-screen-xl m-auto">
                <div className="flex-none md:hidden">
                    <Sheet>
                        <SheetTrigger className="btn btn-square btn-ghost">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent side={"left"}>
                            {links.map((link) => (
                                <Link
                                    href={link.link}
                                    key={link.name}
                                    className="btn btn-ghost w-full text-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Separator />
                            <h6 className="footer-title">Socials</h6>
                            {socials.map((social) => (
                                <Link
                                    href={social.link}
                                    key={social.name}
                                    className="btn btn-ghost w-full text-lg"
                                >
                                    <social.logo className="inline-block" />{" "}
                                    <p className="text-teal-700 dark:text-slate-300">
                                        {social.name}
                                    </p>
                                </Link>
                            ))}
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Yash Pawar</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links.map((link) => (
                            <li
                                className="p-2 hidden md:flex"
                                key={link.name + "nb"}
                            >
                                <Link href={link.link}>{link.name}</Link>
                            </li>
                        ))}
                        <li className="p-2 hidden md:flex">
                            <Link href={firstSocial.link} target="_blank">
                                <firstSocial.logo />
                            </Link>
                        </li>
                        <li className="p-2">
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
