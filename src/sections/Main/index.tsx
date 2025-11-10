import { PricingHero } from "@/sections/PricingHero";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { FAQSection } from "@/sections/FAQSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/sections/CTASection";

export const Main = () => {
    return (
        <main className="text-[15.3px] box-border caret-transparent leading-[22.95px] md:text-lg md:leading-[27px]">
            <PricingHero />
            <FeaturesSection />
            <FAQSection />
            <section className="text-[15.3px] box-border caret-transparent leading-[22.95px] mt-[34px] mb-[136px] md:text-lg md:leading-[27px] md:mt-10 md:mb-40">
                <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[1040px] w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:px-5">
                    <TestimonialCard />
                </div>
            </section>
            <CTASection />
        </main>
    );
};
