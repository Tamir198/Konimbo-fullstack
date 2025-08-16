/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(37 99 235)',
          hover: 'rgb(29 78 216)',
          focus: 'rgb(59 130 246)',
        },
        secondary: {
          DEFAULT: 'rgb(243 244 246)',
          hover: 'rgb(229 231 235)',
          focus: 'rgb(209 213 219)',
        },
        success: 'rgb(16 185 129)',
        warning: 'rgb(245 158 11)',
        error: 'rgb(239 68 68)',
        text: {
          primary: 'rgb(17 24 39)',
          secondary: 'rgb(107 114 128)',
          disabled: 'rgb(156 163 175)',
        },
        border: {
          DEFAULT: 'rgb(209 213 219)',
          focus: 'rgb(59 130 246)',
          error: 'rgb(239 68 68)',
        },
        background: {
          DEFAULT: 'rgb(255 255 255)',
          secondary: 'rgb(249 250 251)',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
};
