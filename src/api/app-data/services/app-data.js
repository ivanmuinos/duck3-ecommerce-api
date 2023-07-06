'use strict';

/**
 * app-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-data.app-data');
