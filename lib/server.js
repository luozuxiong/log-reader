const http = require('http');
const loadsh = require('loadsh');
const brower = require('brower');

class Server {
    constructor(settings) {
        this.opts = loadsh.defaults({}, settings, Server.defaults);
    }

    start() {
        /**
         * create http server
         */
        http.createServer((req, res) => {
            res.end('ok');
        }).listen(this.opts.port);

        /**
         * open brower
         */
        brower.start(`http://127.0.0.1:${this.opts.port}`);
    }
}

Server.defaults = {
    port: 5188//我要发发
}
module.exports = Server;