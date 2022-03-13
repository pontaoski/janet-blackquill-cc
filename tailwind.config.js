module.exports = {
  content: ['themes/janet/layouts/*/*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'charcoal': {
          "100": "#101114",
          "200": "#1a1b1e",
          "300": "#232629",
          "400": "#2e3134",
          "500": "#393c3f",
          "600": "#4f5356",
          "700": "#5c5f62",
          "800": "#686b6f",
          "900": "#818488",
          "1000": "#9b9ea2",
          "1100": "#a8abb0",
          "1200": "#b6b9bd",
          "1300": "#d1d5d9",
          "1400": "#eef1f5",
          "1500": "#fcffff",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
