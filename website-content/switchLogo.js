document.addEventListener('DOMContentLoaded', main);

function main() {
	if (!window.matchMedia) {
		console.warn("This browser seems to not support system-themes, defaulting to dark mode");
		return;
	}



	if (window.matchMedia) {
		const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		updateLogoAccordingToTheme(isDarkTheme);
	}


	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		const isDarkTheme = event.matches;

		updateLogoAccordingToTheme(isDarkTheme);
	});
}

function updateLogoAccordingToTheme(isDarkTheme) {
	const imgSrc = isDarkTheme ? "./img/logo-text-white.png" : "./img/logo-text-black.png";

	const logos = document.getElementsByClassName("Logo");

	for (const logo of logos) {
		logo.src = imgSrc;
	}
}