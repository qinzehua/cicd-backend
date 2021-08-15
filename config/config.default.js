/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1610778075706_8441';
  config.middleware = [];
  const userConfig = {
    security: {
      csrf: {
        enable: false,
      },
    },
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'cicd',
      },
      app: true,
      agent: false,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
