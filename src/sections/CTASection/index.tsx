export const CTASection = () => {
    return (
        <section className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[680px] text-center w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:max-w-[800px] md:px-5">
            <h2 className="text-[oklch(0.279_0.041_260.031)] text-[20.4px] font-extrabold box-border caret-transparent leading-[30.6px] mb-[17px] mx-auto font-poppins md:text-3xl md:leading-[45px] md:mb-5">
                Join businesses that send with Sidemail today
            </h2>
            <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[42.5px] mx-auto md:text-[21px] md:leading-[35.7px] md:mb-[50px]">
                Sidemail will enable your team to remove hundreds of lines of code that
                you had to previously maintain yourself, while no longer having to deal
                with broken emails or landing in the spam folder. Try it free for 7
                days.
            </p>
            <a
                href="https://client.sidemail.io/register"
                className="text-white text-[15.3px] font-bold items-center bg-sky-500 box-border caret-transparent inline-flex h-[45.9px] justify-center tracking-[0.2975px] leading-[22.95px] px-[15.3px] rounded-lg md:text-lg md:h-[54px] md:tracking-[0.35px] md:leading-[27px] md:px-[18px] hover:shadow-[rgba(0,0,0,0.16)_0px_5px_20px_0px]"
            >
                Start trial now
                <img
                    src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-16.svg"
                    alt="Icon"
                    className="text-[15.3px] box-border caret-transparent h-4 tracking-[0.2975px] leading-[22.95px] w-4 ml-[6.8px] font-inter md:text-lg md:tracking-[0.35px] md:leading-[27px] md:ml-2"
                />
            </a>
        </section>
    );
};
