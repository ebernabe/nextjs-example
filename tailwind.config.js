const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{html,js}'],
  darkMode: false,// or media or class
  content: [],
  theme: {    
    colors:{
      ...colors,
    },    
  }
  // ,
  // variants: {
  //   extend: {},
  // },
  // plugins: [],
};
