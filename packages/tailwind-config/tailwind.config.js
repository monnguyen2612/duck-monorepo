/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@tremor/react/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...require('./tremor.theme.js').theme,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black.100'),
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              textDecorationThickness: 'from-font',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'break-spaces',
              wordBreak: 'break-word',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontWeight: theme('fontWeight.semibold'),
              fontSize: theme('fontSize.3xl'),
              marginTop: theme('spacing.10'),
            },
            pre: {
              padding: 0,
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.white'),
              textDecoration: 'underline',
            },
          },
        },
      }),
    },
  },
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}