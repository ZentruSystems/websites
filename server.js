'use strict';

const express = require('express');

const valueLoader = require('./value-loader.js');
const { configureInErrorMode, configure } = require('./app-loader.js');

const app = express();

const check = valueLoader.check().catch(err => {
	console.error(err);
	throw err;
});

const bootstrap = async () => {
	console.info(`server starting...`);

	try {
		try {
			console.info(await check);
		} catch (err) {
			process.exit(-1);
		}

		configure(app);
	} catch (err) {
		if (err.message.includes('ECONNREFUSED'))
			console.error(`Unable to connect to DB (${valueLoader.mongoConnectionString})`, err.stack);
		if (err.stack.includes('at configure')) {
			console.error('Application config is broken:\n' + err, err.stack);
		} else {
			console.error("Something broke!\n" + err, err.stack);
		}

		configureInErrorMode(app);
	}

	app.application = app.listen(valueLoader.port, "0.0.0.0", () => {
		app.port = valueLoader.port;
		app.host = valueLoader.hostname;
		app.ready = true;
		console.log(`Betta Website available at http://${valueLoader.hostname}:${valueLoader.port}`);
	});
}

bootstrap();

module.exports = app;