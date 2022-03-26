module.exports = {
  content: ["./pages/**/*.{html,js}", "./src/**/*.{html,js}", "./component/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'login' : "url('/image/login.png')",
        'home' : "url('/image/BG.png')",
        'article' : "url('/image/BGAR.png')",
        'category' : "url('/image/BGCA.png')"
      }),
      backgroundSize: (theme) => ({
        '100' : '90rem',
      }),
      height : (theme) => ({
        'login' : "60rem",
      }),
      borderColor : (theme) => ({
        'bluea' : "black",
      }),
      borderwidth : (theme) => ({
        'test' : "1px",
      }),
      keyframes : (theme) => ({
        'fadeout' : {
          '0%' : {opacity: '0'},
          '100%' : {opacity: '1'}
        },
      }),
      animation : (theme) => ({
        'fade' : "fadeout 1s ease-in-out",
      }),
    },
  },
  plugins: [],
}
