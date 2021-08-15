/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = () => {
  const userConfig = {
    mysql: {
      client: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
      },
      app: true,
      agent: false,
    }
  };
  console.log(userConfig);
  return {
    ...userConfig,
  };
};
