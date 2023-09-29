/* eslint-disable no-console */
const axios = require('axios');
const config = require('../config/config');

const wakeUp = () => {
  axios
    .get(config.wakeUpUrl)
    .then(() => console.log('WakeUp request sent successfully'))
    .catch((error) => console.error('Error sending WakeUp request:', error));
};

setInterval(wakeUp, 900000); // 15 minutes in milliseconds

module.exports = { wakeUp };
