import type { Config } from 'tailwindcss'
// import typography from '@tailwindcss/typography';

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    //purging option in configuration file
    // we have  already setting up the content option to include the relevant files for PurgeCSS to scan.
    // With this configuration, PurgeCSS will analyze the specified file paths 
    // and remove any unused CSS classes from your final production build, 
    // resulting in a more optimized and smaller CSS file.
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },

  //Tailwind CSS allows you to customize the default theme. 
// Utilize this feature to match your project's design system. However, avoid excessive 
// customization, as it might hinder the benefits of using Tailwind's utility classes.


//   . Tailwind has a number of 
// plugins that can be used to extend its functionality.
  
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),


    plugin(function({ addComponents }:any) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })


  ]

  
}
export default config
