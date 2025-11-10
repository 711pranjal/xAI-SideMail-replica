import { PricingFeatures } from "./PricingFeatures";

interface PricingData {
    volume: string;
    volumeLabel: string;
    yearlyPrice: number;
    monthlyPrice: number;
}

interface CustomPricingTier {
    emails: string;
    price: number;
    isCustom: boolean;
}

const pricingData: Record<string, PricingData> = {
    "1000": {
        volume: "1000",
        volumeLabel: "1k",
        yearlyPrice: 14,
        monthlyPrice: 19,
    },
    "10000": {
        volume: "10000",
        volumeLabel: "10k",
        yearlyPrice: 24,
        monthlyPrice: 32,
    },
    "40000": {
        volume: "40000",
        volumeLabel: "40k",
        yearlyPrice: 53,
        monthlyPrice: 71,
    },
    "70000": {
        volume: "70000",
        volumeLabel: "70k",
        yearlyPrice: 83,
        monthlyPrice: 110,
    },
    "100000": {
        volume: "100000",
        volumeLabel: "100k",
        yearlyPrice: 112,
        monthlyPrice: 149,
    },
    "250000": {
        volume: "250000",
        volumeLabel: "250k",
        yearlyPrice: 164,
        monthlyPrice: 219,
    },
};

const customPricingTiers: CustomPricingTier[] = [
    { emails: "500 000 emails", price: 369, isCustom: false },
    { emails: "750 000 emails", price: 469, isCustom: false },
    { emails: "1 000 000 emails", price: 619, isCustom: false },
    { emails: "Over 1M emails", price: 0, isCustom: true },
];

interface PricingCardProps {
    selectedVolume: string;
}

export const PricingCard = ({ selectedVolume }: PricingCardProps) => {
    // Format email count for display
    const formatEmailCount = (volume: string): string => {
        if (volume === "custom") return "custom";
        const num = parseInt(volume);
        if (num >= 1000) {
            return `${num / 1000}k`;
        }
        return volume;
    };

    // Handle custom pricing view
    if (selectedVolume === "custom") {
        return (
            <div className="text-[15.3px] box-border caret-transparent gap-x-[normal] grid grid-cols-[1fr] leading-[22.95px] gap-y-[normal] text-left md:text-lg md:gap-x-[70px] md:grid-cols-[600px_1fr] md:leading-[27px] md:gap-y-[70px]">
                <section className="text-[15.3px] bg-white box-border caret-transparent leading-[22.95px] border border-slate-300 px-[29.75px] py-[25.5px] rounded-sm border-solid md:text-lg md:leading-[27px] md:px-[70px] md:py-[60px]">
                    <h3 className="text-blue-950 text-[28.9px] box-border caret-transparent leading-[43.35px] mb-[17px] font-poppins md:text-[34px] md:leading-[51px] md:mb-5">
                        Customized
                    </h3>
                    <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[25.5px] md:text-lg md:leading-[28.08px] md:mb-[30px]">
                        Available for businesses with large sending volume. Comes with every other feature we offer.
                    </p>
                    <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] mb-[25.5px] md:text-lg md:leading-[27px] md:mb-[30px]">
                        {customPricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className="text-[15.3px] box-border caret-transparent flex items-center justify-between leading-[22.95px] mb-[17px] md:text-lg md:leading-[27px] md:mb-5"
                            >
                                <span className="text-slate-600 text-[15.3px] box-border caret-transparent leading-[22.95px] md:text-lg md:leading-[27px]">
                                    {tier.emails}
                                </span>
                                {tier.isCustom ? (
                                    <span className="text-slate-600 text-[15.3px] box-border caret-transparent leading-[22.95px] font-semibold md:text-lg md:leading-[27px]">
                                        Custom offer
                                    </span>
                                ) : (
                                    <span className="text-blue-950 text-[15.3px] box-border caret-transparent leading-[22.95px] font-semibold md:text-lg md:leading-[27px]">
                                        ${tier.price} per month *
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-500 text-[13.6px] box-border caret-transparent leading-[20.4px] mb-[25.5px] italic md:text-base md:leading-6 md:mb-[30px]">
                        * get an extra discount if paid yearly
                    </p>
                    <p className="text-slate-400 text-[12.75px] box-border caret-transparent leading-[19.125px] mb-[42.5px] md:text-[15px] md:leading-[22.5px] md:mb-[50px]">
                        (prices shown without the discount)
                    </p>
                    <a
                        href="https://client.sidemail.io/register"
                        className="text-white text-[15.3px] font-bold items-center bg-sky-500 box-border caret-transparent inline-flex h-[45.9px] justify-center tracking-[0.2975px] leading-[22.95px] max-w-full w-[210px] px-[15.3px] rounded-lg md:text-lg md:h-[54px] md:tracking-[0.35px] md:leading-[27px] md:px-[18px] hover:shadow-[rgba(0,0,0,0.16)_0px_5px_20px_0px]"
                    >
                        Start free trial
                        <img
                            src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-12.svg"
                            alt="Icon"
                            className="text-[15.3px] box-border caret-transparent h-4 tracking-[0.2975px] leading-[22.95px] w-4 ml-2.5 font-inter md:text-lg md:tracking-[0.35px] md:leading-[27px]"
                        />
                    </a>
                </section>
                <PricingFeatures />
            </div>
        );
    }

    // Standard pricing view
    const pricing = pricingData[selectedVolume] || pricingData["1000"];
    const emailCountLabel = formatEmailCount(pricing.volume);

    return (
        <div className="text-[15.3px] box-border caret-transparent gap-x-[normal] grid grid-cols-[1fr] leading-[22.95px] gap-y-[normal] text-left md:text-lg md:gap-x-[70px] md:grid-cols-[600px_1fr] md:leading-[27px] md:gap-y-[70px]">
            <section className="text-[15.3px] bg-white box-border caret-transparent leading-[22.95px] border border-slate-300 px-[29.75px] py-[25.5px] rounded-sm border-solid md:text-lg md:leading-[27px] md:px-[70px] md:py-[60px]">
                <h3 className="text-blue-950 text-[28.9px] box-border caret-transparent leading-[43.35px] mb-[17px] font-poppins md:text-[34px] md:leading-[51px] md:mb-5">
                    All-inclusive
                </h3>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[25.5px] md:text-lg md:leading-[28.08px] md:mb-[30px]">
                    Send up to {emailCountLabel} emails per month. Comes with no-code email editor, API,
                    automation, unlimited projects, and every other feature we offer. All
                    you need in one plan.
                </p>
                <div className="text-blue-950 text-[39.1px] font-extrabold box-border caret-transparent leading-[58.65px] mb-[8.5px] md:text-[46px] md:leading-[69px] md:mb-2.5">
                    ${pricing.yearlyPrice}/mo
                </div>
                <div className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[22.95px] mb-[42.5px] md:text-lg md:leading-[27px] md:mb-[50px]">
                    when paid yearly or ${pricing.monthlyPrice} monthly
                </div>
                <a
                    href="https://client.sidemail.io/register"
                    className="text-white text-[15.3px] font-bold items-center bg-sky-500 box-border caret-transparent inline-flex h-[45.9px] justify-center tracking-[0.2975px] leading-[22.95px] max-w-full w-[210px] px-[15.3px] rounded-lg md:text-lg md:h-[54px] md:tracking-[0.35px] md:leading-[27px] md:px-[18px] hover:shadow-[rgba(0,0,0,0.16)_0px_5px_20px_0px]"
                >
                    Start free trial
                    <img
                        src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-12.svg"
                        alt="Icon"
                        className="text-[15.3px] box-border caret-transparent h-4 tracking-[0.2975px] leading-[22.95px] w-4 ml-2.5 font-inter md:text-lg md:tracking-[0.35px] md:leading-[27px]"
                    />
                </a>
            </section>
            <PricingFeatures />
        </div>
    );
};
