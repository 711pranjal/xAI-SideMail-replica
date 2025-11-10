import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
    return (
        <div className="text-[15.3px] box-border caret-transparent flex flex-col justify-normal leading-[27.081px] mb-[23.8px] md:text-lg md:flex-row md:justify-between md:leading-[31.86px] md:mb-[60px]">
            <FooterBrand />
            <FooterColumn
                title="Sidemail"
                links={[
                    { href: "https://sidemail.io/pricing/", text: "Pricing" },
                    {
                        href: "https://sidemail.io/customer-reviews/",
                        text: "Customer reviews",
                    },
                    { href: "https://sidemail.io/about/", text: "About Sidemail" },
                    { href: "https://sidemail.io/articles/", text: "Articles" },
                    { href: "https://sidemail.io/press/", text: "Press & Media" },
                    { href: "https://sidemail.io/contact/", text: "Contact us" },
                ]}
            />
            <FooterColumn
                title="Features"
                links={[
                    {
                        href: "https://sidemail.io/email-sending-api/",
                        text: "Email sending API",
                    },
                    {
                        href: "https://sidemail.io/targeted-email-messages/",
                        text: "Messenger",
                    },
                    {
                        href: "https://sidemail.io/automated-email-sequences/",
                        text: "Email automation",
                    },
                    {
                        href: "https://sidemail.io/subscribe-forms/",
                        text: "Subscribe forms",
                    },
                    {
                        href: "https://sidemail.io/contact-profiles/",
                        text: "Contact profiles",
                    },
                    {
                        href: "https://sidemail.io/no-code-email-editor/",
                        text: "No-code email editor",
                    },
                    {
                        href: "https://sidemail.io/transactional-email-templates/",
                        text: "Transactional email templates",
                    },
                ]}
            />
            <FooterColumn
                title="For developers"
                links={[
                    {
                        href: "https://sidemail.io/docs/email-sending-quickstart/",
                        text: "Email sending quickstart",
                    },
                    {
                        href: "https://sidemail.io/docs/contact-profiles-quickstart/",
                        text: "Contact profiles quickstart",
                    },
                    {
                        href: "https://sidemail.io/docs/template-props/",
                        text: "Dynamic email templates",
                    },
                    {
                        href: "https://sidemail.io/docs/markdown-emails/",
                        text: "Markdown emails",
                    },
                    {
                        href: "https://sidemail.io/docs/api/email/",
                        text: "Email API methods",
                    },
                    {
                        href: "https://sidemail.io/docs/sending-identities/",
                        text: "Domain verification & DKIM",
                    },
                    {
                        href: "https://sidemail.io/docs/mcp-server/",
                        text: "Email MCP server",
                    },
                    {
                        href: "https://sidemail.io/email-open-tracking/",
                        text: "Email open tracking",
                    },
                    {
                        href: "https://stats.uptimerobot.com/gpPQWiyqL",
                        text: "API status",
                    },
                ]}
                variant="min-w-[180px] mb-[30px] pr-0 md:mb-0 md:pr-6"
            />
            <FooterColumn
                title="Tools"
                links={[
                    {
                        href: "https://sidemail.io/tools/email-validator/",
                        text: "Email Validator",
                    },
                    {
                        href: "https://sidemail.io/tools/email-list-validation/",
                        text: "Email List Validation",
                    },
                    {
                        href: "https://sidemail.io/tools/email-list-cleaner/",
                        text: "Email List Cleaner",
                    },
                    {
                        href: "https://sidemail.io/tools/dkim-checker/",
                        text: "DKIM Checker",
                    },
                    {
                        href: "https://sidemail.io/tools/dkim-generator/",
                        text: "DKIM Generator",
                    },
                    {
                        href: "https://sidemail.io/tools/spf-checker/",
                        text: "SPF Checker",
                    },
                    {
                        href: "https://sidemail.io/tools/spf-generator/",
                        text: "SPF Generator",
                    },
                    {
                        href: "https://sidemail.io/tools/dmarc-checker/",
                        text: "DMARC Checker",
                    },
                    {
                        href: "https://sidemail.io/tools/dmarc-generator/",
                        text: "DMARC Generator",
                    },
                    {
                        href: "https://sidemail.io/tools/saas-churn-calculator/",
                        text: "SaaS Churn Calculator",
                    },
                    {
                        href: "https://sidemail.io/tools/cofounder-equity-calculator/",
                        text: "Equity Calculator",
                    },
                ]}
            />
            <FooterColumn
                title="Legal"
                links={[
                    {
                        href: "https://sidemail.io/legal/privacy-policy/",
                        text: "Privacy Policy",
                    },
                    {
                        href: "https://sidemail.io/legal/terms-of-service/",
                        text: "Terms of Service",
                    },
                    {
                        href: "https://sidemail.io/legal/data-processing-agreement/",
                        text: "Data Processing Agreement",
                    },
                    {
                        href: "https://sidemail.io/anti-spam-policy/",
                        text: "Anti-spam Policy",
                    },
                ]}
            />
        </div>
    );
};
