import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        modal: '50',
        nav: '40',
        object : '30',
        sticky : '20',
        semiObject: '10',
        main: '0',
      },
      animation: {
        MainTextAppear: 'MainTextAppear 1.5s ease-in-out',
        'spin-slow': 'spin 450s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) :void {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl'), fontWeight: 'bold', margin: theme('margin.2') },
        'h2': { fontSize: theme('fontSize.2xl'), fontWeight: 'bold', margin: theme('margin.2') },
        'h3': { fontSize: theme('fontSize.xl'), fontWeight: 'bold', margin: theme('margin.2') },
        'h4': { fontSize: theme('fontSize.lg'), fontWeight: 'bold', margin: theme('margin.2') },
        'h5': { fontSize: theme('fontSize.base'), fontWeight:'bold', margin :theme ('margin.2')},
        'h6': { fontSize :theme ('fontSize.sm'), fontWeight:'bold', margin :theme ('margin.2')}
      })
    })
  ]
};
