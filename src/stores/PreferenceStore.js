import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('theme', () => {
	const preferredTheme = ref('light')

	function $switch() {
		if(preferredTheme.value == 'light') {
			preferredTheme.value = 'dark'
		} else {
			preferredTheme.value = 'light'
		}
	}

	return { preferredTheme, $switch }
})