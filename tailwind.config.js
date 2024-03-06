/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '5rem',
        lg: '5rem',
        xl: '6rem',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
    extend: {
      colors: {
        'yellow-color': '#d8be53',
        'green-color': '#607d4b',
        'black-color': '#262525',
        'brown-color': '#84664e',
        'blue-color': '#395557'
      }
    },

  },
  plugins: [],
}
