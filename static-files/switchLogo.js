document.addEventListener('DOMContentLoaded', main);

window.faviconHost = ".";
window.logoHost = ".";

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
	const imgSrc = isDarkTheme ? `${window.logoHost}/img/logo-text-white.png` : `${window.logoHost}/img/betta-systems-logo-transparent-1.svg`;
	const faviconSrc = isDarkTheme ? `${window.faviconHost}/img/favicon-white.png` : `${window.faviconHost}/img/favicon-black.png`;

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
