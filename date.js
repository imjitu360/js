var http=require('http');
var dt=require('./module');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    var result=dt.datetime();
    res.write('current date and time');
    res.write(result);
    res.end();
});
server.listen(1234);