import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			/* Color system extending the CSS custom properties from index.css */
			colors: {
				/* Base UI colors */
				border: 'hsl(var(--border))', /* Border color from CSS variables */
				input: 'hsl(var(--input))', /* Input field border color */
				ring: 'hsl(var(--ring))', /* Focus ring color */
				background: 'hsl(var(--background))', /* Page background color */
				foreground: 'hsl(var(--foreground))', /* Main text color */
				
				/* Primary brand colors - Orange theme */
				primary: {
					DEFAULT: 'hsl(var(--primary))', /* Main orange brand color */
					foreground: 'hsl(var(--primary-foreground))', /* Text on primary color */
					light: 'hsl(var(--primary-light))', /* Light orange variant */
					dark: 'hsl(var(--primary-dark))' /* Dark orange variant */
				},
				
				/* Secondary neutral colors */
				secondary: {
					DEFAULT: 'hsl(var(--secondary))', /* Secondary background color */
					foreground: 'hsl(var(--secondary-foreground))' /* Text on secondary */
				},
				
				/* Error/destructive colors */
				destructive: {
					DEFAULT: 'hsl(var(--destructive))', /* Error red color */
					foreground: 'hsl(var(--destructive-foreground))' /* Text on error */
				},
				
				/* Muted colors for less important content */
				muted: {
					DEFAULT: 'hsl(var(--muted))', /* Muted background */
					foreground: 'hsl(var(--muted-foreground))' /* Muted text */
				},
				
				/* Accent colors for highlights */
				accent: {
					DEFAULT: 'hsl(var(--accent))', /* Accent background */
					foreground: 'hsl(var(--accent-foreground))' /* Accent text */
				},
				
				/* Popover/dropdown colors */
				popover: {
					DEFAULT: 'hsl(var(--popover))', /* Popover background */
					foreground: 'hsl(var(--popover-foreground))' /* Popover text */
				},
				
				/* Card component colors */
				card: {
					DEFAULT: 'hsl(var(--card))', /* Card background */
					foreground: 'hsl(var(--card-foreground))' /* Card text */
				}
			},
			
			/* Border radius system for consistent rounded corners */
			borderRadius: {
				lg: 'var(--radius)', /* Large radius (0.75rem) */
				md: 'calc(var(--radius) - 2px)', /* Medium radius */
				sm: 'calc(var(--radius) - 4px)' /* Small radius */
			},
			
			/* Custom fonts for education branding */
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'], /* Modern sans-serif */
				'display': ['Inter', 'system-ui', 'sans-serif'] /* Display font for headings */
			},
			
			/* Spacing scale for consistent layouts */
			spacing: {
				'18': '4.5rem', /* 72px - Custom spacing for sections */
				'22': '5.5rem', /* 88px - Custom spacing for larger sections */
			},
			
			/* Animation keyframes for smooth interactions */
			keyframes: {
				/* Accordion animations for expandable content */
				'accordion-down': {
					from: {
						height: '0', /* Start collapsed */
						opacity: '0' /* Start transparent */
					},
					to: {
						height: 'var(--radix-accordion-content-height)', /* Expand to content height */
						opacity: '1' /* Fade in */
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)', /* Start expanded */
						opacity: '1' /* Start visible */
					},
					to: {
						height: '0', /* Collapse */
						opacity: '0' /* Fade out */
					}
				},
				
				/* Fade in animation for content loading */
				'fade-in': {
					'0%': {
						opacity: '0', /* Start invisible */
						transform: 'translateY(20px)' /* Start slightly below */
					},
					'100%': {
						opacity: '1', /* End visible */
						transform: 'translateY(0)' /* End in position */
					}
				},
				
				/* Scale in animation for cards and buttons */
				'scale-in': {
					'0%': {
						opacity: '0', /* Start invisible */
						transform: 'scale(0.95)' /* Start slightly smaller */
					},
					'100%': {
						opacity: '1', /* End visible */
						transform: 'scale(1)' /* End at normal size */
					}
				},
				
				/* Floating animation for hero elements */
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)' /* Start and end position */
					},
					'50%': {
						transform: 'translateY(-10px)' /* Float up in middle */
					}
				},
				
				/* Pulse animation for call-to-action elements */
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1' /* Full opacity */
					},
					'50%': {
						opacity: '0.7' /* Reduced opacity */
					}
				}
			},
			
			/* Animation utilities using the keyframes */
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out', /* Quick accordion open */
				'accordion-up': 'accordion-up 0.2s ease-out', /* Quick accordion close */
				'fade-in': 'fade-in 0.6s ease-out', /* Smooth content fade in */
				'scale-in': 'scale-in 0.3s ease-out', /* Quick scale in */
				'float': 'float 3s ease-in-out infinite', /* Continuous floating */
				'pulse-slow': 'pulse-slow 2s ease-in-out infinite' /* Slow pulsing */
			},
			
			/* Box shadow utilities for depth */
			boxShadow: {
				'glow': '0 0 20px hsl(var(--primary) / 0.3)', /* Orange glow effect */
				'glow-lg': '0 0 40px hsl(var(--primary) / 0.2)', /* Large orange glow */
				'inner-light': 'inset 0 2px 4px 0 rgb(255 255 255 / 0.1)' /* Inner light highlight */
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
