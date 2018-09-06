/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('dotenv').load();

// Configuration de l'authentification au workspace mis en place sur IBM Watson
var middleware = require('botkit-middleware-watson')({
  username: process.env.ASSISTANT_USERNAME,
  password: process.env.ASSISTANT_PASSWORD,
  workspace_id: process.env.WORKSPACE_ID,
  url: process.env.ASSISTANT_URL || 'https://gateway.watsonplatform.net/assistant/api',
  version: '2018-07-10'
});

module.exports = function(app) {

  //Actuellement que Skype mais possibilité d'ajouter d'autres Channel au même middleware
  if (process.env.USE_SKYPE) {
    var skype = require('./bot-skype');
    skype.controller.middleware.receive.use(middleware.receive);
    skype.controller.createWebhookEndpoints(app, skype.bot);
    console.log('skype bot is live');
  }

  // Customize your Watson Middleware object's before and after callbacks.
  middleware.before = function(message, assistantPayload, callback) {
    callback(null, assistantPayload);
  };

  middleware.after = function(message, assistantResponse, callback) {
    callback(null, assistantResponse);
  };
};
