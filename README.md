## Notes

### Approach Notes

**Styling method chosen:**
TailwindCSS. I chose utility-first because it's fast to iterate and keeps styling co-located with markup. I also set up a custom Tailwind config to capture Sidemail's brand palette (navy blues, warm oranges) so colors stay consistent across all components. For repeated patterns like buttons and cards, I used Tailwind's `@apply` to avoid duplication.

**Component structure rationale:**
I broke down the page into logical, reusable pieces. The `Header`, `Navigation`, and `Footer` are layout wrappers. 
Then I created section-level components like `HeroSection`, `PricingTiers`, and `FAQSection` that handle major page blocks. 
For smaller, repeated elements — like individual pricing cards and feature lists — I extracted those into `PricingCard.tsx` and `FeatureList.tsx` so they're easy to maintain and test.

I also kept all pricing plans and FAQ data in a separate `/data/` constants file rather than hardcoding them in components. This makes it simple to swap data sources later or run the site with dynamic content. Every component is typed with TypeScript interfaces, so I catch prop mismatches early.

**Biggest challenge / tradeoff due to 2–3 hour limit:**
Matching the exact colors, font sizes, and spacing from the reference page took more time than expected because there's no public design file. I spent time in the browser inspector and Figma reverse-engineering to get close. Because of the time crunch, I kept animations minimal — just basic hover states, no complex transitions. The CTA buttons link to placeholder routes rather than actual workflows.

**Deviations from original & reasoning:**
I hardcoded all pricing tiers and FAQ items as JSON fixtures instead of fetching them. This keeps the scope manageable for a 2–3 hour assignment and avoids backend setup. For icons, I used simple Lucide React icons instead of recreating custom SVGs — it's faster and still looks professional. The footer links are visual placeholders; they don't navigate to full pages. The goal was pixel-close visual accuracy within the time box, not a fully functional product.

---

### Deployment & Verification
- **Live URL**: https://xai-sidemail.vercel.app/ 
- **Repository**: https://github.com/711pranjal/xAI-SideMail-replica 
- **Tested on**: Chrome/Safari at 1440px desktop viewport