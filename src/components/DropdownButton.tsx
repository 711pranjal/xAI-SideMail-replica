"use client";

import { useState } from "react";
import { Code, Send, Rocket, AtSign, Users, FileCheck, FileText, DollarSign } from "lucide-react";
import React from "react";

interface DropdownSection {
    title: string;
    items: {
        label: string;
        href: string;
        description: string;
        icon: React.ReactNode;
    }[];
}

const dropdownSections: DropdownSection[] = [
    {
        title: "COMMUNICATION",
        items: [
            {
                label: "Email sending API",
                href: "https://sidemail.io/features/email-api",
                description: "integrate email sending into your application.",
                icon: <Code className="w-4 h-4" />,
            },
            {
                label: "Messenger",
                href: "https://sidemail.io/features/messenger",
                description: "send product updates and newsletters.",
                icon: <Send className="w-4 h-4" />,
            },
            {
                label: "Email automation",
                href: "https://sidemail.io/features/automation",
                description: "set up automated email sequences.",
                icon: <Rocket className="w-4 h-4" />,
            },
        ],
    },
    {
        title: "AUDIENCE",
        items: [
            {
                label: "Subscribe forms",
                href: "https://sidemail.io/features/subscribe-forms",
                description: "collect email addresses.",
                icon: <AtSign className="w-4 h-4" />,
            },
            {
                label: "Contact profiles",
                href: "https://sidemail.io/features/contact-profiles",
                description: "manage all your subscribers in one place.",
                icon: <Users className="w-4 h-4" />,
            },
        ],
    },
    {
        title: "DEVELOPMENT",
        items: [
            {
                label: "No-code email editor",
                href: "https://sidemail.io/features/email-editor",
                description: "create reusable email templates.",
                icon: <FileCheck className="w-4 h-4" />,
            },
            {
                label: "Transactional email templates",
                href: "https://sidemail.io/features/transactional-templates",
                description: "use premade email templates.",
                icon: (
                    <div className="relative w-4 h-4">
                        <FileText className="w-4 h-4 absolute" />
                        <DollarSign className="w-2.5 h-2.5 absolute left-[6px] top-[6px]" />
                    </div>
                ),
            },
        ],
    },
];

export const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span 
            className="relative text-[15.3px] box-border caret-transparent inline-block leading-[22.95px] md:text-lg md:leading-[27px]"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="text-slate-500 text-[13.6px] bg-transparent caret-transparent leading-[20.4px] text-center mx-[4.25px] p-[8.5px] md:text-base md:leading-6 md:mx-[5px] md:p-2.5">
                <span className="text-sky-900 text-[13.6px] box-border caret-transparent leading-[24.48px] md:text-base md:leading-[28.8px]">
                    <span className="text-[13.6px] border-l-sky-900 border-r-sky-900 border-t-sky-900 box-border caret-transparent leading-[24.48px] border-b-transparent border-b-2 border-solid md:text-base md:leading-[28.8px]">
                        Features
                    </span>
                    <img
                        src="https://c.animaapp.com/mhsawjsvKK5PGC/assets/icon-2.svg"
                        alt="Icon"
                        className="text-slate-300 text-[13.6px] box-border caret-transparent inline-block h-6 leading-[24.48px] w-2.5 ml-[7px] font-inter md:text-base md:leading-[28.8px]"
                    />
                </span>
            </button>
            
            {/* Dropdown Menu */}
            <div 
                className={`absolute bg-slate-900 z-[2] p-8 rounded-lg w-[560px] overflow-hidden ${
                    isOpen 
                        ? 'visible opacity-100 scale-100 translate-y-0' 
                        : 'invisible opacity-0 scale-90 translate-y-[5%]'
                }`}
                style={{
                    top: 'calc(100% + 8px)',
                    left: '-150px',
                    boxShadow: '0 23px 50px #5c626633',
                    transition: 'visibility 0.25s ease, transform 0.25s ease, opacity 0.25s ease',
                }}
            >
                {dropdownSections.map((section, sectionIndex) => (
                    <div key={section.title} className={sectionIndex > 0 ? "mt-6 pt-6 border-t border-slate-700" : ""}>
                        {/* Section Header */}
                        <div className="mb-3">
                            <h3 className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                {section.title}
                            </h3>
                        </div>
                        
                        {/* Section Items */}
                        <div className="space-y-1">
                            {section.items.map((item, itemIndex) => (
                                <a
                                    key={itemIndex}
                                    href={item.href}
                                    className="flex items-start gap-3 py-2.5 hover:bg-slate-800 transition-colors group rounded px-2 -mx-2"
                                >
                                    <div className="text-slate-400 group-hover:text-slate-300 mt-0.5 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-white group-hover:text-sky-400 transition-colors">
                                            {item.label}
                                        </div>
                                        <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                            {item.description}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </span>
    );
};
