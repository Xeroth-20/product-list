const { get } = require('http');

class Firebase {

    constructor() {
        this._http = require('https');
        this.url = 'product-list-6049a.firebaseio.com';
    }

    httpOptions(config) {
        return {
            host: this.url,
            path: config.path,
            method: !config.method ? 'GET' : config.method,
            headers: !config.headers ? null : config.headers
        };
    }

    getProductList(handler) {
        const options = this.httpOptions({
            path: '/products.json'
        });

        const req = this._http.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => handler.data(JSON.parse(data)));
        });

        req.on('error', handler.error);
        req.end();
    }

    addProduct(handler, product) {
        const options = this.httpOptions({
            path: '/products.json',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': JSON.stringify(product).length
            }
        });

        const req = this._http.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => handler.data(data));
        });

        req.on('error', handler.error);
        req.write(JSON.stringify(product));
    }
}

module.exports = new Firebase();