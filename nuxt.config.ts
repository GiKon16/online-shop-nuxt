// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	app: {
		baseURL: '/demo/marmelad/',
	},
	ssr: false,
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],

	vite: {
		plugins: [tailwindcss(), svgLoader()],
	},

	alias: {
		'@assets': './assets',
		'@entities': './entities',
		'@features': './features',
		'@shared': './shared',
		'@pages': './pages',
	},

	modules: ['@pinia/nuxt', '@nuxt/image'],
});
