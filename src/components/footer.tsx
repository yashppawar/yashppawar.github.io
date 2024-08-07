import { SiX, SiGithub } from "@icons-pack/react-simple-icons";
import { ScanFace, Section } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const socials = [
    {
        name: "GitHub",
        logo: SiGithub,
        link: "https://github.com/yashppawar",
    },
    {
        name: "X / Twitter",
        logo: SiX,
        link: "https://x.com/yashpawarp",
    },
];

export default function Footer() {
    return (
        <section id="footer">
            <Separator />
            <footer className="footer p-10 max-w-screen-xl m-auto">
                <aside>
                    <ScanFace size={44} />
                    <p>
                        Yash Pawar
                        <br />
                        Providing reliable tech since 2005
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        {socials.map((social) => (
                            <Link href={social.link} key={social.name + "ft"}>
                                <social.logo />
                            </Link>
                        ))}
                    </div>
                </nav>
            </footer>
        </section>
    );
}
