const http = require('http');
const uuid = require('')
const bodyParser = require('./body-parser');

const notes = {};
const app = http.createServer((req, res) => {
    res.send = json => res.end(JSON.stringify(json));

    const url = parse(req.url, true);
    if(url.pathname === '/people' && req.method === 'POST') {
        bodyParser(req)
            .then(json => {
                return People.create({
                    name: json.name,
                    are: json.age,
                    color: json.color
                });
            })
            .then(createdPerson => res.send(createdPerson));
    }
});

