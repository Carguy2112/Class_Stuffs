const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        return res.end('Welcome to the Home Page');
    }
    if (req.url === '/about'){
        return res.end('Welcome to the About Page');
    }

    res.end(
        'Are you sure you typed that right?'
    );

});

server.listen(5000);