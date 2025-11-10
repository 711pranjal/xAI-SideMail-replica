export type FooterColumnProps = {
    title: string;
    links: Array<{
        href: string;
        text: string;
    }>;
    variant?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
    return (
        <div
            className={`text-[15.3px] box-border caret-transparent basis-[0%] grow leading-[27.081px] md:text-lg md:leading-[31.86px] ${props.variant || ""}`}
        >
            <div className="text-sky-500 text-[11px] font-semibold box-border caret-transparent leading-[19.47px] uppercase mb-2.5">
                {props.title}
            </div>
            {props.links.map((link, index) => (
                <div
                    key={index}
                    className="text-xs box-border caret-transparent leading-[21.24px] mb-1 md:mb-[7px]"
                >
                    <a
                        href={link.href}
                        className="text-zinc-600 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent border-b-transparent border-b-2 border-solid hover:border-b-sky-500"
                    >
                        {link.text}
                    </a>
                </div>
            ))}
        </div>
    );
};
