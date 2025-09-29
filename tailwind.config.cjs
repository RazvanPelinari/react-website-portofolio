/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      // Adds `where-dark:` variant which targets elements inside an element with class `dark`
      addVariant('where-dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `:where(.dark) .${className}`;
        });
      });
    }
  ],
};
