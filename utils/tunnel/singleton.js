// // create a unique, global symbol name
// // -----------------------------------

const TUNNEL_KEY = Symbol.for("Pipes.Tunnel");
const Tunnel = require('./tunnel.js');

// check if the global object has this symbol
// add it if it does not have the symbol, yet
// ------------------------------------------
const tunnel = new Tunnel()
var globalSymbols = Object.getOwnPropertySymbols(global);
var hasTunnel = (globalSymbols.indexOf(TUNNEL_KEY) > -1);

if (!hasTunnel) {
    global[TUNNEL_KEY] = {
        tunnel,
        connect: function () {
            return this.tunnel.connect()
        },
        get url() {
            return this.tunnel.url;
        },
        kill: async function () {
            try {
                await this.tunnel.kill();
            } catch (e) {
                console.log('e:', e)
            }
        }
    };
}

// define the singleton API
// ------------------------

var singleton = {};

Object.defineProperty(singleton, "instance", {
    get: function () {
        return global[TUNNEL_KEY];
    }
});

// ensure the API is never changed
// -------------------------------

Object.freeze(singleton);
// export the singleton API only
// -----------------------------

module.exports = singleton;