/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(24, 31, 42)',
          200: 'rgb(28, 36, 49)',
          300: 'rgb(11, 21, 35)',
          400: 'rgb(32, 42, 60)',
        }
      },
      margin: ({
        small: ('450px'),
      }),
      width: ({
        header: '670px',
        p: '550px',
        cus: '80%',
        cus2: '408px',
        cuz2: '350px',
        cu2: '510px',
        cus3: '310px',
        cus3n: '355px',
        cus4: '65px',
        cus5: '50%',
        cu5: '90%',
        cu6: '72%',
        cus6: '62%',
        cus7: '68%',
        cus8: '25%',
        cus9: '64%'
      }),
      fontFamily: {
        impSans: ['Open Sans', 'sans-serif'],
        impRale: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        sl: ['1.09rem', { lineHeight: '1.75rem' }],
        xxs:  ['0.5rem', { lineHeight: '1rem' }],
        sxs: ['0.7rem', { lineHeight: '1rem' }],
        ssm: ['0.9rem', { lineHeight: '1.25rem' }],
        m: ['0.89rem', { lineHeight: '1.25rem' }],
        ss: ['0.95rem', { lineHeight: '1.25rem' }],
        sxl: ['1.04rem', { lineHeight: '1.5rem' }],
        '4sl': ['2.1rem', { lineHeight: '2.5rem' }],
        '5sl': ['2.5rem', { lineHeight: '2.5rem' }],
        bxl: ['1.4rem', { lineHeight: '1.75rem' }],
      },
      opacity: {
        85: '0.86'
      }
    },
  },
  plugins: [],
}

