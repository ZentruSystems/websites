'use strict';

const { createTerminus } = require("@godaddy/terminus");
const express = require("express");
const { cors } = require("./cors.js");
const { appVersion, fileServeRoot, production } = require("./value-loader.js");
const compression = require("compression");

async function ping(req, res) {
	res.status(200).send("Pingged you back!");
}

function liveProbe(app) {
	return (req, res) => {
		res.status(200).send();
	};
}

function readyProbe(app) {
	return (req, res) => {
		if (!app.ready) res.status(400).send();
		res.status(200).send();
	}
}

const version = (semVer) => (req, res, next) => {
	res.setHeader("X-Version", semVer);
	next();
}

function configure(app) {

	createTerminus(app, {
		onSignal: () => {
			const app = require('./server.js');

			console.info("Starting shutdown waiting for cleanup to finish...")

			return Promise.all([
				mongoose.disconnect(),
				app.application ? new Promise((resolve, reject) => app.application.close((err) => {
					if (err) reject(err)
					else resolve()
				})) : Promise.resolve(),
			]);
		},
	})

	app.use(`/live`, liveProbe(app));
	app.use(`/ready`, readyProbe(app));

	//#region middlewares
	app.use(cors('*'));
	app.use(version(appVersion));
	//#endregion

	app.use(compression());
	console.info(`Using compression`);

	app.use(express.static(fileServeRoot, {
		index: ["index.html"],
		dotfiles: 'deny',
		cacheControl: true,
		immutable: true,
		maxAge: 1000/*1s*/ * 3600/*1h*/ * 24/*1day*/,
	}));
	console.info(`Serving files from '${fileServeRoot}'`);

	if (!production) {
		console.info("Configuring dev endpoints...");
		app.use(`/ping`, ping);
	}

	app.use((err, req, res, next) => {
		try {
			res.status(500).send("This should not happen. We sadly don't have any more specific information.");
			console.error(err);
		} catch (e) {
			if (e.code !== 'ERR_HTTP_HEADERS_SENT') throw e;

			console.error(`tried to reply twice when dealing with err: \n${JSON.stringify(err, null, 2)}`);
		}
	});
}

const defaultErrorResponse = (err, req, res, next) => {
	res
		.status(500)
		.send('Problems at start up - contact the admin or use the healthcheck ');
};

const configureInErrorMode = async (app) => {
	app.use(`/ping`, ping);
	app.use(`/live`, liveProbe(app));
	app.use(`/ready`, readyProbe(app));
	app.use(defaultErrorResponse);
}

module.exports = { configure, configureInErrorMode };