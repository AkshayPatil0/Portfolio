import type { Config } from "tailwindcss";
import containerQueriesPlugin from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#FAF9F6",
        primary: "#000",
        neutral: "#404040",
      },
    },
  },
  plugins: [containerQueriesPlugin],
};
export default config;
