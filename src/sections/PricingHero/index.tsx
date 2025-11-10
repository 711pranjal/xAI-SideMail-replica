"use client";

import { useState } from "react";
import { EmailVolumeSelector } from "@/sections/PricingHero/components/EmailVolumeSelector";
import { PricingCard } from "@/sections/PricingHero/components/PricingCard";

export const PricingHero = () => {
    const [selectedVolume, setSelectedVolume] = useState("1000");

    return (
        <header className="relative text-[15.3px] bg-slate-50 box-border caret-transparent leading-[22.95px] text-center mb-[119px] pt-[102px] pb-[68px] md:text-lg md:leading-[27px] md:mb-[140px] md:py-[120px]">
            <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[1040px] w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:px-5">
                <h1 className="text-sky-950 text-[51px] font-black box-border caret-transparent leading-[61.2px] max-w-[680px] mb-[51px] mx-auto font-poppins md:text-6xl md:leading-[72px] md:max-w-[800px] md:mb-[60px]">
                    Pricing
                </h1>
                <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[700px] mb-[70px] mx-auto md:text-lg md:leading-[27px]">
                    <div className="text-[15.3px] items-center box-border caret-transparent flex flex-wrap leading-[22.95px] list-none ml-[-8.5px] mr-[-8.5px] min-h-px mb-[17px] md:text-lg md:leading-[27px] md:mb-5 md:-mx-2.5">
                        <div className="text-slate-500 text-[18.7px] box-border caret-transparent basis-[0%] grow leading-[28.05px] px-[8.5px] md:text-[22px] md:leading-[33px] md:px-2.5">
                            How many emails do you need to send monthly?
                        </div>
                    </div>
                    <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] mb-[34px] md:text-lg md:leading-[27px] md:mb-10">
                        <EmailVolumeSelector 
                            selectedVolume={selectedVolume}
                            onVolumeChange={setSelectedVolume}
                        />
                    </div>
                </div>
                <PricingCard selectedVolume={selectedVolume} />
            </div>
        </header>
    );
};
