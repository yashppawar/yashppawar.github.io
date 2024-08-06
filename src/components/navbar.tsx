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

export default function Navbar() {
    return (
        <nav className="sticky top-0 backdrop-blur-md">
            <div className="navbar max-w-screen-xl m-auto">
                <div className="flex-none md:hidden">
                    <Sheet>
                        <SheetTrigger className="btn btn-square btn-ghost">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    Are you absolutely sure?
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Yash Pawar</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="p-2 hidden md:flex">
                            <a>Link</a>
                        </li>
                        <li className="p-2 hidden md:flex">
                            <Link
                                href="https://github.com/yashppawar"
                                target="_blank"
                            >
                                <SiGithub />
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
