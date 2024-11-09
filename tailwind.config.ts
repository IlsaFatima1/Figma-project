import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily :{"Montserrat":["Montserrat"]
},//colors:{
  //"rgba-color":"(35, 166, 240, 1)"


}, colors: {
  custom: 'rgb(34, 150, 243)',
  customcolor: 'rgba(34, 150, 243, 0.5)',
},
      // colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      // },
    },
  
  plugins: [],

};
export default config;
