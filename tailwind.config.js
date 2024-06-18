/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	safelist: [
		"text-slate-800",
		"text-slate-300",
		"text-slate-100",
		{
			pattern:
				/bg-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)/
		},
		{
			pattern:
				/bg-gradient-to-r from-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)  via-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)/
		}
	],
	theme: {
		extend: {
			colors: {
				primary: "#FCEFDE",
				accent: "#D8BEA2",
				dark: "#0d0c0b",
				info: "#5E79FF",
				warning: "#E4EA2C",
				success: "#27E897",
				error: "#FF546D"
			}
		}
	},
	plugins: []
};
