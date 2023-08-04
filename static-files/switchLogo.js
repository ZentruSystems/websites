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
	const imgSrc = isDarkTheme ? "https://betta.systems/img/logo-text-white.png" : "https://betta.systems/img/logo-text-black.png";
	const faviconSrc = isDarkTheme ? "https://betta.systems/img/favicon-white.png" : "https://betta.systems/img/favicon-black.png";

	const logos = document.getElementsByClassName("Logo");

	for (const logo of logos) {
		logo.src = imgSrc;
	}

	changeFavicon(faviconSrc);
}


function changeFavicon(src) {
	document.head = document.head || document.getElementsByTagName('head')[0];

	const faviconId = "dynamic-favicon";

	const link = document.createElement('link');
	const oldLink = document.getElementById(faviconId);

	link.id = faviconId;
	link.rel = 'shortcut icon';
	link.href = src;
	
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	
	document.head.appendChild(link);
}
