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
            keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%, 90%': { transform: 'translate(-1px, 1px) rotate(-1deg)' },
          '20%, 80%': { transform: 'translate(-2px, -1px) rotate(1deg)' },
          '30%, 70%': { transform: 'translate(2px, 1px) rotate(0deg)' },
          '40%, 60%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 1px) rotate(-1deg)' },
        },
      },
      animation: {
        shake: 'shake 0.8s infinite',
      },
    },
  },
};
