import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="text-slate-600 text-[15.3px] not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-[22.95px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter md:text-lg md:leading-[27px]">
      <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] md:text-lg md:leading-[27px]">
        <Header />
        <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] md:text-lg md:leading-[27px]">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}

