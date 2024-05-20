import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('theme', () => {
	const preferredTheme = ref('light')

	function $switchTheme() {
		if (preferredTheme.value === 'light') {
			preferredTheme.value = 'dark'
			document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
		} else if (preferredTheme.value === 'dark') {
			preferredTheme.value = 'light'
			document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
		}
	}

	return { preferredTheme, $switchTheme }
})