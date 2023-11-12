const assert = require('assert');
const http = require('http');

describe('API Tests', () => {

    it('should return a 200 OK status', async () => {
        
        const myVariable = process.env.TOKEN;
        console.log("myVariable");
        console.log(myVariable);


        const options = {
        hostname: 'https://api.github.com/',
        path: 'gists/5d7e231294d51571a661eb8b823c379b',
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${myVariable}`
        }
        };

        const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
        });

        req.on('error', error => {
        console.error(error);
        });

        req.end();
            });
});
