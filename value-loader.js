const { getEnv } = require('./env-loader.js');

/** loads the configuration *synchronosly* */
function load() {
	const hostname = getEnv("HOST");
	const port = getEnv("PORT");

	/** All files contained in this location will be available to the web, **⚠UNAUTHORIZED** that is*/
	const fileServeRoot = getEnv("FILE_SERVE_ROOT");

	/** If this is true the server is running in production mode */
	const production = getEnv("NODE_ENV") == "production";


	/** The current Version number as in `package.json` */
	const appVersion = require('./package.json').version;

	return {
		appVersion,
		fileServeRoot,
		hostname,
		port,
		production,
	}
}

/****Checks all fields to be valid**
 * returns a string containing all logging output to later log to db*/
async function check(writeLogToDb = false) {
	let logToWrite = "";
	const writeLog = {
		verbose: (msg) => { logToWrite += "\n" + msg; console.log(msg) },
		info: (msg) => { logToWrite += "\n" + msg; console.log(msg) },
		warning: (msg) => { logToWrite += "\n" + msg; console.log(msg) },
		error: (msg) => { logToWrite += "\n" + msg; console.log(msg) },
	};

	writeLog.verbose("VALUE-PROVIDER");
	writeLog.info(`appVersion: ${this.appVersion}`);

	writeLog.verbose(`hostname: ${this.hostname}`);
	if (!this.hostname) {
		_envVarNotSet('HOST', true);
	}

	writeLog.verbose(`port: ${this.port}`);
	if (!this.port) {
		_envVarNotSet('PORT', true);
	}

	writeLog.verbose(`fileServeRoot: ${this.fileServeRoot}`);
	if (!this.fileServeRoot) {
		_envVarNotSet("FILE_SERVE_ROOT", false);
	}

	return logToWrite;



	///
	/**
	 * @param {String} name 
	 * @param {boolean} error 
	 * @param {{error: (string)=>any, warning:(string)=>any}} logger the logging object to use, use this to 'pipe' the output
	 */
	function _envVarNotSet(name, error = false) {
		const message = `ENV Variable '${name.toUpperCase()}' not set!`;

		if (error) {
			writeLog.error(message);
			throw new Error(message);
		} else {
			writeLog.warning(message);
		}
	}
}

/** let only for testing */
let valueLoader = {
	check,
	/** Only for testing
	 * @param env overwrites to the loaded result
	*/
	reload: (env) => {
		const loaded = load();
		for (const key of loaded.keys()) {
			this[key] = env[key] ?? loaded[key];
		}
	},
	...(load()),
};

module.exports = valueLoader;