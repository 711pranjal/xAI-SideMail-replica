import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
    return (
        <footer className="text-zinc-400 text-[15.3px] box-border caret-transparent leading-[22.95px] pt-[60px] pb-5 md:text-lg md:leading-[27px] md:pt-[120px]">
            <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[1040px] w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:px-5">
                <FooterContent />
                <FooterCopyright />
            </div>
        </footer>
    );
};
