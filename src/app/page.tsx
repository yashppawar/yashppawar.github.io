import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const dune_rise = localFont({ src: '../../public/font/dune_rise/Dune_Rise.ttf' })


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-teal-50 dark:bg-slate-900">
      <section className="hero h-screen overflow-hidden">
        <div className="relative bg-slate-800 h-screen">
          {/* <Image
            className="h-screen max-w-[5616px] w-auto lg:w-screen lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={'/greg-rakozy-oMpAz-DN-9I-unsplash.jpg'}
            alt={'Photo by Greg Rakozy on Unsplash'}
            width={5616}
            height={3744}
          /> */}
          <Image
            className="hidden dark:block h-screen max-w-[5397px] w-auto lg:w-screen lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={'/daniel-olah-6KQETG8J-zI-unsplash.jpg'}
            alt={'Sand Dune by Daniel Olah on Unsplash'}
            width={5397}
            height={3602}
          />
          <Image
            className="dark:hidden h-screen max-w-[6000px] w-auto lg:w-screen lg:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src={'/mike-yukhtenko-a2kD4b0KK4s-unsplash.jpg'}
            alt={'Sand Dune by Mike Yukhtenko on Unsplash'}
            width={6000}
            height={4000}
          />
          <div className={cn("inline-block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", dune_rise.className)}>
            {/* <h1 className="text-9xl text-teal-100 tracking-[.5em]">YASH</h1> */}

            <div className="flex text-teal-100 justify-between text-9xl">
              <p>Y</p><span className="w-16"></span>
              <p>A</p><span className="w-16"></span>
              <p>S</p><span className="w-16"></span>
              <p>H</p>
            </div>

            <div className="h-1 bg-radient-ellipse from-white from-0% to-black to-70%"></div>

            <div className="flex text-teal-200 justify-between text-2xl">
              <p>P</p>
              <p>A</p>
              <p>W</p>
              <p>A</p>
              <p>R</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero h-screen overflow-hidden"></section>
    </main>
  );
}
