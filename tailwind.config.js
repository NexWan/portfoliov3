// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--tw-color-primary)/<alpha-value>)',
        bg:      'rgb(var(--tw-color-bg)/<alpha-value>)',
        text:    'rgb(var(--tw-color-text)/100%)',
      },
      borderRadius: {
        DEFAULT: 'var(--antd-borderRadius)',
      },
    },
  },
};
