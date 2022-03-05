var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    fs.open('input,txt','r+',function(err,fd)
    {
        if(err)
        {
            console.log("file opened successfully");
            fs.readFile('sample.txt',function(err,data)
            {
                if(!err)
                console.log('sucess');
                res.end(data);
                fs.close(fd);
            });
        };
    });
});server.listen(5000);