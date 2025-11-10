"use client";

interface EmailVolumeSelectorProps {
    selectedVolume: string;
    onVolumeChange: (volume: string) => void;
}

export const EmailVolumeSelector = ({ selectedVolume, onVolumeChange }: EmailVolumeSelectorProps) => {
    const volumes = [
        { value: "1000", label: "1 000" },
        { value: "10000", label: "10 000" },
        { value: "40000", label: "40 000" },
        { value: "70000", label: "70 000" },
        { value: "100000", label: "100 000" },
        { value: "250000", label: "250 000" },
        { value: "custom", label: "More" },
    ];

    return (
        <div className="text-[11.9px] font-semibold bg-slate-200 box-border caret-transparent flex flex-wrap justify-center leading-[17.85px] w-full mx-auto rounded-[999px] md:text-sm md:leading-[21px]">
            {volumes.map((volume) => {
                const isSelected = selectedVolume === volume.value;
                return (
                    <label
                        key={volume.value}
                        className="text-[11.9px] box-border caret-transparent block leading-[17.85px] cursor-pointer md:text-sm md:leading-[21px]"
                    >
                        <input
                            type="radio"
                            value={volume.value}
                            name="sendingLimit"
                            checked={isSelected}
                            onChange={(e) => onVolumeChange(e.target.value)}
                            className="text-[11.9px] bg-transparent box-border caret-transparent hidden leading-[17.85px] text-start p-0 md:text-sm md:leading-[21px]"
                        />
                        <span
                            className={`text-[11.9px] box-border caret-transparent inline-block leading-[17.85px] px-[17px] py-[8.5px] rounded-[999px] transition-colors md:text-sm md:leading-[21px] md:px-5 md:py-2.5 ${isSelected
                                ? "text-white bg-blue-950"
                                : "text-slate-600"
                                }`}
                        >
                            {volume.label}
                        </span>
                    </label>
                );
            })}
        </div>
    );
};
