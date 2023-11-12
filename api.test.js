const assert = require('assert');
const axios = require('axios');

describe('API Tests', () => {

    it('should return a 200 OK status', async () => {
        // Send a GET request to the server
        const xhr = new XMLHttpRequest();
        const myVariable = process.env.TOKEN;
        console.log(myVariable);


        xhr.setRequestHeader('Authorization', `Bearer ${myVariable}`);
        xhr.setRequestHeader('Accept', 'application/vnd.github+json');

        const response = await axios.get('https://api.github.com/gists/5d7e231294d51571a661eb8b823c379b');

        // Assert that the response status is 200 OK
        assert.strictEqual(response.status, 200);
    });
});
