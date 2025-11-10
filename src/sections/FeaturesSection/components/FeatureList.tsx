export type FeatureListProps = {
    items: string[];
    className?: string;
    iconSrc?: string;
    iconAlt?: string;
};

export const FeatureList = (props: FeatureListProps) => {
    const {
        items,
        className = "mb-[59.5px] md:mb-[70px]",
        iconSrc = "https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-14.svg",
        iconAlt = "Icon",
    } = props;

    return (
        <ul
            className={`text-[15.3px] box-border caret-transparent gap-x-[4.25px] grid grid-cols-[1fr] leading-[22.95px] list-none gap-y-[4.25px] pl-0 md:text-lg md:gap-x-[5px] md:grid-cols-[1fr_1fr_1fr] md:leading-[27px] md:gap-y-[5px] ${className}`}
        >
            {items.map((item, index) => (
                <li
                    key={index}
                    className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] md:text-lg md:leading-[28.08px]"
                >
                    <img
                        src={iconSrc}
                        alt={iconAlt}
                        className="text-sky-500 text-[15.3px] box-border caret-transparent inline-block leading-[23.868px] w-3.5 mr-2.5 font-inter md:text-lg md:leading-[28.08px]"
                    />
                    {item}
                </li>
            ))}
        </ul>
    );
};
