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
var express = require('express');
var bodyParser = require('body-parser');
var verify = require('./security');
var fs = require('fs');
var https = require('https');
var app = express();

// Options nécessaire pour créer un serveur https
var sslOptions = {
  key: fs.readFileSync('ssl/key.key'),
  cert: fs.readFileSync('ssl/cert.pem'),
  ca: fs.readFileSync('ssl/chain.pem')
};


app.use(bodyParser.json({
}));

// création du serveur https
https.createServer(sslOptions, app).listen(443);
 console.log('webhook is listening');

require('./app')(app);
