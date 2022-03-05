var http=require('http')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("hello");
    res.end("end");
});server.listen(5000);