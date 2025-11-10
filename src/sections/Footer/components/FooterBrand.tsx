export const FooterBrand = () => {
    return (
        <div className="text-zinc-600 text-xs box-border caret-transparent basis-[0%] grow leading-[21.24px] min-w-[auto] mr-0 mb-[30px] pr-0 md:min-w-[230px] md:mr-auto md:mb-0 md:pr-8">
            <a
                href="https://sidemail.io/"
                className="box-border caret-transparent inline-block mb-[17px] md:mb-5 hover:underline"
            >
                <img
                    src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-17.svg"
                    alt="Icon"
                    className="box-border caret-transparent w-[120px] mr-[34px] font-inter md:mr-10"
                />
            </a>
            <div className="box-border caret-transparent">
                <div className="box-border caret-transparent mb-[8.5px] md:mb-2.5">
                    Sidemail is an all-in-one email platform for SaaS. Estd. 2018. Brought
                    to you by the team behind{" "}
                    <a
                        href="https://robolly.com/"
                        className="box-border caret-transparent hover:underline"
                    >
                        Robolly
                    </a>
                    and{" "}
                    <a
                        href="https://emailsupportai.com/"
                        className="box-border caret-transparent hover:underline"
                    >
                        EmailSupportAI
                    </a>
                    .
                </div>
                <div className="box-border caret-transparent mb-[17px] md:mb-5">
                    support@sidemail.io
                </div>
                <div className="items-center box-border caret-transparent flex flex-wrap md:flex-nowrap">
                    <img
                        src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-18.svg"
                        alt="Icon"
                        className="box-border caret-transparent w-5 mr-2.5 font-inter"
                    />
                    Made in EU. GDPR compliant.
                </div>
            </div>
        </div>
    );
};
