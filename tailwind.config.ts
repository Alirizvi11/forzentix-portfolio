import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          glow: "hsl(var(--primary-glow))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          glow: "hsl(var(--secondary-glow))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          glow: "hsl(var(--accent-glow))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          secondary: "hsl(var(--card-secondary))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'cosmic': 'var(--gradient-cosmic)',
        'nebula': 'var(--gradient-nebula)',
        'stellar': 'var(--gradient-stellar)',
        'aurora': 'var(--gradient-aurora)',
      },
      boxShadow: {
        'cosmic': 'var(--shadow-cosmic)',
        'stellar': 'var(--shadow-stellar)',
        'glow': 'var(--shadow-glow)',
        'deep': 'var(--shadow-deep)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        "float-particle": {
          "0%": {
            transform: "translateY(100vh) scale(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.6",
          },
          "90%": {
            opacity: "0.6",
          },
          "100%": {
            transform: "translateY(-100px) scale(1)",
            opacity: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
          },
        },
        "cosmic-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "meteor": {
          "0%": {
            transform: "translateX(-100px) translateY(-100px)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px))",
            opacity: "0",
          },
        },
        "floatRandom": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-30px) translateX(20px) rotate(90deg)",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-20px) rotate(180deg)",
          },
          "75%": {
            transform: "translateY(-40px) translateX(10px) rotate(270deg)",
          },
        },
        "aurora": {
          "0%, 100%": {
            opacity: "0.1",
            transform: "scale(1) rotate(0deg)",
          },
          "25%": {
            opacity: "0.15",
            transform: "scale(1.1) rotate(5deg)",
          },
          "50%": {
            opacity: "0.08",
            transform: "scale(0.9) rotate(-3deg)",
          },
          "75%": {
            opacity: "0.12",
            transform: "scale(1.05) rotate(2deg)",
          },
        },
        "gridMove": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-100px, -100px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "float-particle": "float-particle 8s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "cosmic-spin": "cosmic-spin 20s linear infinite",
        "meteor": "meteor 4s linear infinite",
        "floatRandom": "floatRandom 15s ease-in-out infinite",
        "aurora": "aurora 20s ease-in-out infinite",
        "gridMove": "gridMove 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
