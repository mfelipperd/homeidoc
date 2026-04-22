import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        'primary-navy': 'var(--color-primary-navy)',
        'primary-green': 'var(--color-primary-green)',
        'primary-teal': 'var(--color-primary-teal)',
        'navy-alt': 'var(--color-navy-alt)',
      },
    },
  },
  plugins: [],
};

export default config;
