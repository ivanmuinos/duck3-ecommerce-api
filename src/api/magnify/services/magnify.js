'use strict';

/**
 * magnify service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::magnify.magnify');
