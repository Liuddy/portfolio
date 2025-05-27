import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('theme', () => {
	const preferredTheme = ref('light')

	function $switchTheme() {
		let theme = 'light'
		if (preferredTheme.value === 'light')
			theme = 'dark'
		preferredTheme.value = theme
		document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
	}

	return { preferredTheme, $switchTheme }
})