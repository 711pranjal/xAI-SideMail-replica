import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
// import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
    return (
        <nav className="text-[15.3px] items-center box-border caret-transparent flex h-[59.5px] leading-[22.95px] md:text-lg md:h-[70px] md:leading-[27px]">
            <NavbarLogo />
            <DesktopMenu />
            <div className="text-[15.3px] box-border caret-transparent hidden leading-[22.95px] min-h-0 min-w-0 ml-auto md:text-lg md:block md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
                <a
                    href="https://client.sidemail.io/login"
                    className="text-sky-900 text-[12.75px] font-bold items-center box-border caret-transparent inline-flex h-[28.9px] justify-center leading-[19.125px] border border-zinc-200 px-[17px] py-[8.5px] rounded-md border-solid md:text-[15px] md:h-[34px] md:leading-[22.5px] md:px-5 md:py-2.5 hover:underline"
                >
                    Login
                </a>
                <a
                    href="https://client.sidemail.io/register"
                    className="text-white text-[12.75px] font-black items-center bg-sky-900 box-border caret-transparent inline-flex h-[28.9px] justify-center leading-[19.125px] ml-[8.5px] px-[13.6px] py-[8.5px] rounded-md md:text-[15px] md:h-[34px] md:leading-[22.5px] md:ml-2.5 md:px-4 md:py-2.5 hover:underline"
                >
                    Try it free
                </a>
            </div>
            {/* <MobileMenuButton /> */}
        </nav>
    );
};
