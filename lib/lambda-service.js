'use strict'

/**
 * Keep your Lambda functions warm
 * @author Jeremy Daly <jeremy@jeremydaly.com>
 * @license MIT
 */

// Require AWS SDK
const Lambda = require('aws-sdk/clients/lambda') // AWS SDK

// Export
module.exports = new Lambda()
