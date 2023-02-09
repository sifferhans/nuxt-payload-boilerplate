// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt', '@nuxt/devtools'],
	runtimeConfig: {
		public: {
			cmsUrl: 'http://localhost:3000'
		}
	}
})
