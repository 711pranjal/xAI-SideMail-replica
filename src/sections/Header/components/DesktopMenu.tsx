import { DropdownButton } from "../../../components/DropdownButton";

export const DesktopMenu = () => {
  return (
    <div className="text-[15.3px] box-border caret-transparent hidden leading-[22.95px] min-h-0 min-w-0 md:text-lg md:block md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
      <DropdownButton />
      <a
        href="https://sidemail.io/pricing/"
        className="text-slate-500 text-[13.6px] box-border caret-transparent inline-block leading-[20.4px] mx-[4.25px] p-[8.5px] md:text-base md:leading-6 md:mx-[5px] md:p-2.5"
      >
        <span className="text-sky-900 text-[13.6px] box-border caret-transparent leading-[24.48px] md:text-base md:leading-[28.8px]">
          <span className="text-[13.6px] border-l-sky-900 border-r-sky-900 border-t-sky-900 box-border caret-transparent leading-[24.48px] border-b-transparent border-b-2 border-solid md:text-base md:leading-[28.8px]">
            Pricing
          </span>
        </span>
      </a>
      <a
        href="https://sidemail.io/customer-reviews/"
        className="text-slate-500 text-[13.6px] box-border caret-transparent inline-block leading-[20.4px] mx-[4.25px] p-[8.5px] md:text-base md:leading-6 md:mx-[5px] md:p-2.5"
      >
        <span className="text-sky-900 text-[13.6px] box-border caret-transparent leading-[24.48px] md:text-base md:leading-[28.8px]">
          <span className="text-[13.6px] border-l-sky-900 border-r-sky-900 border-t-sky-900 box-border caret-transparent leading-[24.48px] border-b-transparent border-b-2 border-solid md:text-base md:leading-[28.8px]">
            Customer reviews
          </span>
        </span>
      </a>
      <a
        href="https://sidemail.io/docs/email-sending-quickstart/"
        className="text-slate-500 text-[13.6px] box-border caret-transparent inline-block leading-[20.4px] mx-[4.25px] p-[8.5px] md:text-base md:leading-6 md:mx-[5px] md:p-2.5"
      >
        <span className="text-sky-900 text-[13.6px] box-border caret-transparent leading-[24.48px] md:text-base md:leading-[28.8px]">
          <span className="text-[13.6px] border-l-sky-900 border-r-sky-900 border-t-sky-900 box-border caret-transparent leading-[24.48px] border-b-transparent border-b-2 border-solid md:text-base md:leading-[28.8px]">
            Developer docs
          </span>
          <img
            src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-10.svg"
            alt="Icon"
            className="text-slate-300 text-[13.6px] box-border caret-transparent inline-block h-6 leading-[24.48px] w-2.5 ml-[7px] font-inter md:text-base md:leading-[28.8px]"
          />
        </span>
      </a>
    </div>
  );
};
