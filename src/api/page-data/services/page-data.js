'use strict';

/**
 * page-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-data.page-data');
