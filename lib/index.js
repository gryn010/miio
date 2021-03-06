'use strict';

const discovery = require('./discovery');

/**
 * Get information about the models supported. Can be used to extend the models
 * supported.
 */
module.exports.models = require('./models');

/**
 * Resolve a device from the given options.
 *
 * Options:
 * @param `address`, **required** the address to the device as an IP or hostname
 * @param `port`, optional port number, if not specified the default 54321 will be used
 * @param `token`, optional token of the device
 */
module.exports.device = require('./connectToDevice');

/**
 * Extract information about a device from its hostname on the local network.
 */
module.exports.infoFromHostname = require('./infoFromHostname');

/**
 * @description 
 * Browse for devices available on the network. 
 * Will not automatically connect to them.
 */
module.exports.browse = (options) => (new discovery.Browser(options || {}))

/**
 * Get access to all devices on the current network. 
 * Will find and connect to devices automatically.
 */
module.exports.devices = (options) => (new discovery.Devices(options || {}));
