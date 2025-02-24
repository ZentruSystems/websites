document.addEventListener("DOMContentLoaded", init);


const cache = new Map();

function init() {
	const nav = document.getElementsByTagName("nav")[0];
	const content = document.getElementsByTagName("main")[0];

	nav.children[0].tagName

	const links = nav.querySelectorAll("a");

	const currentLocation = window.location.href;
	handleLocation(currentLocation);


	links.forEach(element => {
		element.addEventListener("click", async ev => {
			ev.preventDefault();
			const toLoad = element.href;

			await handleLocation(toLoad)
		});
	});

	/**
	 *
	 * @param {string} toLoad
	 * @returns
	 */
	async function handleLocation(toLoad) {
		const originalToLoad = toLoad;
		toLoad = toLoad.replace("/index.html", "/_index.html");

		if (!toLoad.endsWith(".html")) {
			toLoad += ".html";
		}

		// const cached = cache.get(toLoad);

		// if (cached) {
		// 	content.innerHTML = cached;
		// 	return;
		// }

		const loaded = await fetch(toLoad);
		cache.set(toLoad, await loaded.text());
		content.innerHTML = cache.get(toLoad);

		history.pushState(undefined, "", originalToLoad);
	}
}
