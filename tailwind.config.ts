import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EDF3F1',
          200: '#DDE7E4',
          300: '#ABB7B5',
          400: '#67706F',
          500: '#101212',
          600: '#0B0F0F',
          700: '#080C0C',
          800: '#05090A',
          900: '#030608',
        },
        secondary: {
          100: '#CDFCD9',
          200: '#9DF9BE',
          300: '#6BEFA7',
          400: '#45DF9A',
          500: '#10CB8A',
          600: '#0BAE86',
          700: '#08927D',
          800: '#05756F',
          900: '#035C61',
        },
        success: '#4DC924',
        info: '#1C63FF',
        warning: '#FFC802',
        danger: '#FF4744',
      },
    },
  },
  plugins: [],
}
export default config
