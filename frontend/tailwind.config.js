/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          bg:       'var(--color-bg)',
          surface:  'var(--color-surface)',
          panel:    'var(--color-panel)',
          border:   'var(--color-border)',
          muted:    'var(--color-muted)',
          text:     'var(--color-text)',
          cyan:     'var(--color-cyan)',
          green:    'var(--color-green)',
          yellow:   'var(--color-yellow)',
          red:      'var(--color-red)',
          orange:   'var(--color-orange)',
          purple:   'var(--color-purple)',
          blue:     'var(--color-blue)',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(88,200,227,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(88,200,227,0.8)' },
        }
      }
    },
  },
  plugins: [],
};
