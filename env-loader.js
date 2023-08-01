const dotenv = require('dotenv');

dotenv.config();

/**
 * @param {string} name 
 * @param {(string) => any} constructor 
 * @returns {string}
 */
const getEnv = (name, constructor) => {
	if (constructor) return constructor(process.env[name]);
	return process.env[name];
}

module.exports = { getEnv };