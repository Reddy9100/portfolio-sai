module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'gothic' : ['Didact Gothic', 'sans-serif;']
      },
      fontSize:{
        'large' : ['150px'],
        'xtra' : ['130px'],
        'para-lg' : ['70px']
      },
      backgroundColor : {
        'cherry' : 'black',
        'off' : 'cyan',
        'match' : "#333333"
      },
      colors  : {
        'match' : "#333333",
        'cherry' : 'black',
        'off' : 'cyan'
      },
      keyframes: {
        bubble: {
          '0%, 100%': {
            borderRadius: '10% 40% 30% 20%',
            filter: 'drop-shadow(10px 10px 10px cyan)'
          },
          '25%': {
            borderRadius: '0% 20% 30% 40%',
            filter: 'drop-shadow(10px 10px 10px cyan)'
          },
          '50%': {
            borderRadius: '30% 4% 20% 50%',
            filter: 'drop-shadow(10px 10px 10px cyan)'
          },
          '75%': {
            borderRadius: '40% 50% 30% 20%',
            filter: 'drop-shadow(10px 10px 10px cyan)'
          },
        },
        textChange : {
          'from' : {
            color : "#333333"
          },
          'to' :{
            color : "red"
          }
        }
      },
      animation: {
        bubble: 'bubble 6s ease-in-out infinite',
        textChange : 'textChange 3s linear forwards infinite'
      },

    },
  },
  plugins: [],
};
