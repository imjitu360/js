var http=require('http');
var fs=require('fs');
var server=http.createServer((req,res){
    res.writeHead(200,{'content-Type':'tetx/html'})
    fs.createReadStream('index.html').pipe(res)
})
server.listen(3000);