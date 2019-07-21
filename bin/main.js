#!/usr/bin/env node

const commander = require('commander');
const pkg = require('./../package');
const Server = require('./../lib/server');

commander
    .version(pkg.version);

commander
    .Command('start')

    .option('-p --port', 'Server port')

    .action(port => {
        let server = new Server({port: typeof port === 'string' ? port : undefined});
        server.start();
    });

commander.parse(process.argv);
