/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Semantic theme tokens mapped to CSS variables with <alpha-value> support
        canvas: 'rgb(var(--bg-main) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)'
        },
        content: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
          subtle: 'var(--color-primary-subtle)',
          contrast: 'var(--color-primary-contrast)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          hover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
          subtle: 'var(--color-secondary-subtle)'
        },
        stroke: {
          DEFAULT: 'rgb(var(--border-color) / <alpha-value>)',
          subtle: 'var(--border-subtle)'
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',

        // Direct specification tokens
        brandDark: {
          bg: '#0B1020',
          surface: '#111A2E',
          elevated: '#162238',
          primary: '#6366F1',
          secondary: '#22D3EE',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          border: '#263449',
          success: '#34D399'
        },
        brandLight: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          elevated: '#F1F5F9',
          primary: '#4F46E5',
          secondary: '#0891B2',
          textPrimary: '#0F172A',
          textSecondary: '#475569',
          border: '#E2E8F0',
          success: '#059669'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      boxShadow: {
        'glow-primary': '0 0 24px -4px rgba(99, 102, 241, 0.35)',
        'glow-secondary': '0 0 24px -4px rgba(34, 211, 238, 0.35)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(99, 102, 241, 0.35)',
        'card-hover-light': '0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(79, 70, 229, 0.3)'
      },
      animation: {
        'status-pulse': 'statusPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 200ms ease-out forwards'
      },
      keyframes: {
        statusPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(52, 211, 153, 0.7)' },
          '50%': { boxShadow: '0 0 0 8px rgba(52, 211, 153, 0)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
