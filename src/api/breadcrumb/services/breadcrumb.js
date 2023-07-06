'use strict';

/**
 * breadcrumb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::breadcrumb.breadcrumb');
