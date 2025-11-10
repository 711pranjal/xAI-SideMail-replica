import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
    return (
        <header className="fixed text-[15.3px] backdrop-blur-[5px] bg-slate-50/90 box-border caret-transparent leading-[22.95px] w-full z-[2] left-0 top-0 md:text-lg md:leading-[27px]">
            <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[1040px] w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:px-5">
                <Navbar />
            </div>
        </header>
    );
};
