import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ctp: {
                    accent: "#89b4fa",
                    "base-text": "#cdd6f4",
                    "surface-1": "#45475a",
                    "surface-0": "#313244",
                    "subtext-0": "#bac2de",
                    base: "#1e1e2e",
                    "base-dark": "#121212",
                },
            },
        },
    },
    plugins: [],
};
export default config;
