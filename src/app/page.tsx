import { dune_rise } from "@/app/fonts";
import { cn } from "@/lib/utils";
import ThemedStaticImage from "@/components/ui/themed-image";
import Footer from "@/components/footer";
import { Meteors } from "@/components/ui/metors";

import heroBgDark from "../../public/images/hero-bg-dark.jpg";
import heroBgLight from "../../public/images/hero-bg-light.jpg";
import NewNavbar from "../components/newNavbar";

function SpacedLetters({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <div className={cn("flex justify-between", className)}>
            {Array.from(text).map((letter, i) => (
                <span key={letter + i}>{letter}</span>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-teal-50 dark:bg-slate-900">
            <section className="hero h-screen overflow-hidden">
                <div className="relative bg-slate-800 h-screen">
                    <ThemedStaticImage
                        className="h-screen"
                        imgClassName="h-screen pointer-events-none max-w-max w-auto lg:w-screen lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        srcLight={heroBgLight}
                        srcDark={heroBgDark}
                        placeholder="blur"
                        alt="Sand Dune by Mike Yukhteno or Daniel Olah on unsplash"
                    />

                    <div
                        className={cn(
                            "inline-block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-screen-md text-teal-200 p-8",
                            dune_rise.className
                        )}
                    >
                        <SpacedLetters
                            text="YASH"
                            className="text-4xl sm:text-6xl md:text-9xl"
                        />

                        <div className="h-px bg-gradient-to-r from-transparent via-teal-100 to-transparent mb-4"></div>

                        <SpacedLetters
                            text="PAWAR"
                            className="text-sm sm:text-md md:text-2xl"
                        />
                    </div>
                </div>
            </section>
            {/* <Navbar /> */}
            <NewNavbar/>
            <section className="hero h-screen overflow-hidden relative">
                {/* <Meteors number={10} /> */}
            </section>
            <Footer />
        </main>
    );
}
