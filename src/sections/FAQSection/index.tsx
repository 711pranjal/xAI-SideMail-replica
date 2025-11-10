export const FAQSection = () => {
    return (
        <section className="text-[15.3px] box-border caret-transparent leading-[22.95px] mb-[119px] md:text-lg md:leading-[27px] md:mb-[140px]">
            <div className="text-[15.3px] box-border caret-transparent leading-[22.95px] max-w-[748px] w-full mx-auto px-[17px] md:text-lg md:leading-[27px] md:max-w-[880px] md:px-5">
                <div className="text-[15.3px] items-center box-border caret-transparent flex flex-wrap leading-[22.95px] list-none ml-[-8.5px] mr-[-8.5px] min-h-px mb-[25.5px] md:text-lg md:leading-[27px] md:mb-[30px] md:-mx-2.5">
                    <div className="text-[15.3px] box-border caret-transparent shrink-0 leading-[22.95px] px-[8.5px] md:text-lg md:leading-[27px] md:px-2.5">
                        <h2 className="text-[oklch(0.279_0.041_260.031)] text-[20.4px] font-extrabold box-border caret-transparent leading-[30.6px] font-poppins md:text-3xl md:leading-[45px]">
                            Common questions
                        </h2>
                    </div>
                    <div className="text-[15.3px] box-border caret-transparent basis-[0%] grow leading-[22.95px] px-[8.5px] md:text-lg md:leading-[27px] md:px-2.5">
                        <hr className="text-[15.3px] border-b-slate-300 border-l-slate-600 border-r-slate-600 border-t-slate-600 box-border caret-transparent h-0 leading-[22.95px] border-t-0 border-x-0 md:text-lg md:leading-[27px]" />
                    </div>
                </div>
                <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[17px] md:text-[21px] md:leading-[35.7px] md:mb-5">
                    Can I adjust my monthly sending limit at any time?
                </p>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[42.5px] md:text-lg md:leading-[28.08px] md:mb-[50px]">
                    Yes, adjust your monthly sending limit at any time without penalty or
                    hassle. Both increase and decrease changes in the sending limit are
                    immediate — no wait for the next billing cycle. When you increase the
                    sending limit, we charge you immediately a calculated amount based on
                    the previous sending limit and the days left in the billing cycle.
                </p>
                <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[17px] md:text-[21px] md:leading-[35.7px] md:mb-5">
                    What happens if I exceed my monthly sending limit?
                </p>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[42.5px] md:text-lg md:leading-[28.08px] md:mb-[50px]">
                    If you exceed your monthly sending limit, you will be billed for extra
                    usage at the end of your billing cycle. The cost is calculated for
                    1,000 emails, based on your plan pricing. The cost calculation:{" "}
                    <br className="text-[15.3px] box-border caret-transparent leading-[23.868px] md:text-lg md:leading-[28.08px]" />
                    Overage cost per 1,000 emails = (Your plan price / Your plan&#39;s
                    email limit) * 1,000
                    <br className="text-[15.3px] box-border caret-transparent leading-[23.868px] md:text-lg md:leading-[28.08px]" />
                    Furthermore, you can upgrade your plan at any time if you anticipate
                    higher sending needs.
                </p>
                <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[17px] md:text-[21px] md:leading-[35.7px] md:mb-5">
                    Will I be charged when my trial ends?
                </p>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[42.5px] md:text-lg md:leading-[28.08px] md:mb-[50px]">
                    No. We don&#39;t ask for your credit card to start the trial. Only
                    enter payment details when you&#39;re ready to upgrade. If not, no
                    hurt feelings.
                </p>
                <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[17px] md:text-[21px] md:leading-[35.7px] md:mb-5">
                    Can I cancel at any time?
                </p>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[42.5px] md:text-lg md:leading-[28.08px] md:mb-[50px]">
                    Yes, cancel at any time. There&#39;s no minimum contract for Sidemail
                    — cancel at any time with one click, no questions asked.
                </p>
                <p className="text-lg box-border caret-transparent tracking-[-0.3px] leading-[30.6px] mb-[17px] md:text-[21px] md:leading-[35.7px] md:mb-5">
                    Need a custom plan?
                </p>
                <p className="text-slate-500 text-[15.3px] box-border caret-transparent leading-[23.868px] mb-[42.5px] md:text-lg md:leading-[28.08px] md:mb-[50px]">
                    Need a higher monthly sending limit? Looking for other customization?
                    Let us know about your requirements — we&#39;re ready to tailor a
                    custom quote.{" "}
                    <a
                        href="https://sidemail.io/contact/"
                        className="text-sky-500 text-[15.3px] box-border caret-transparent leading-[23.868px] md:text-lg md:leading-[28.08px] hover:underline"
                    >
                        Get in touch
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};
