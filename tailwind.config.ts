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
        'cream': '#F3F0DD',
        'light-gray': '#BAB6A0',
        'caramel': '#DDA878',
        'khaki': '#D9A16D',
        'brown': '#9C6B4B',
        'green': '#01A979',
        'light-green': '#53BA95',
        'orange': '#EC734B',
        'light-orange': '#EA9966',
        'navy-blue': '#1F4655'
      },
    },
  },
  plugins: [],
};
export default config;
