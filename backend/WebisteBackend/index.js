const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method === 'GET'){
        console.log('Aslam o alikum')
        res.statusCode = 200
        res.end('Walaikum salam')
    }
    if(req.method ==='POST'){
        res.statusCode = 200
        res.end('Aslam o alikum')
        console.log('Waalikum salam')
    }
})

server.listen(5000)