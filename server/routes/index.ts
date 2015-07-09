/**
 All non-API related routes (e.g. route to Angular app).
 */
/// <reference path="../../types/node.d.ts" />
/// <reference path="../../types/express.d.ts" />

import express = require('express');
import Server = require('../server')

export class MainRouter {

    constructor(private configuration:Server.ServerConfiguration) {
    }
    start() {
        var app = express();
        var configuration = this.configuration;
        app.get('/', function (req, res) {
            // route all requests to Angular app
            if (app.get('environment') !== undefined && app.get('environment') == 'test') {
                res.sendFile('index-test.html');
            }
            else {
                res.sendFile('index.html');
            }
        });

        return app;
    }

}
