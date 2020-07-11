class Firebase {

    constructor() {
        this._http = require('https');
        this.url = 'product-list-6049a.firebaseio.com';
    }

    addProduct(product) {
        const options = {
            host: this.url,
            path: '/products.json',
            method: 'POST',
            headers: {
                "Content-Type": "text/plain",
                "Content-Length": JSON.stringify({"xd": "xd"}).length
            }
        }

        var req = this._http.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            })
            
            res.on('end', () => console.log(data));
        })
        req.write(JSON.stringify({"xd": "xd"}))
    }
}

module.exports = new Firebase();