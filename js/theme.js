const switchInput = document.getElementById('switch')
const styles = document.documentElement.style

const ligthTheme = {
	'--bg-color': '#eeeeee',
	'--text-color': '#181818',
}

const darkTheme = {
	'--bg-color': '#181818',
	'--text-color': '#eeeeee',
}

const changeTheme = (theme) => {
	const customStyles = Object.keys(theme)
	for (const style of customStyles) {
		styles.setProperty(style, theme[style])
	}
}

switchInput.addEventListener('click', (ev) => {
	ev.target.previousElementSibling.checked
		? changeTheme(ligthTheme)
		: changeTheme(darkTheme)
})
