const fs=require('fs');
const formidable=require('formidable');
const http=require('http');

const Server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="fapp" method="POST" enctype="multipart/form-data">');
        res.write('applicant name:<input type="text" name="t1"><br>');
        res.write('phone:<input type="text" name="t2"><br>');
        res.write('Address:<input type="text" name="t3"><br>');
        res.write('resume upload:<input type="text" name="fileupload"><br>');
        res.write('<input type="submit" name="upload"><br>');
        res.end();
    }
    else if(req.url=='/fapp')
    {
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files)
        {
            res.write('<h1>name:'+fields.t1+'</h1>');
            res.write('<h1>phone:'+fields.t2+'</h1>');
            res.write('<h1>address:'+fields.t3+'</h1>');
            var oldpath=files.filetoupload.path;
            var newpath='c:/msc/'+files.filetoupload.name ;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                else{
                    res.write('resume uploaded and moved succesfully');
                    res.end();
                }
            });

        });
        else{
            res.end("page not found");
        }
        
    }).listen(3456);
