/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: '#14285A',
					light: '#1E3A78',
				},
				accent: {
					DEFAULT: '#4B3F8A',
					dark: '#362C6B',
				},
				surface: '#FFFFFF',
				bg: '#F7F7F5',
				border: '#E4E4E0',
				body: {
					DEFAULT: '#1F2430',
					muted: '#5A5F6B',
				},
			},
			fontFamily: {
				heading: ['Lora', 'Georgia', 'Times New Roman', 'serif'],
				body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
			},
			maxWidth: {
				content: '1160px',
			},
			borderRadius: {
				brand: '12px',
			},
		},
	},
	plugins: [],
}
