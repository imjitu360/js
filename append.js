const fs=require('fs');
const formidable=require('formidable');
const http=require('http');

const Server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="append" method="post" enctype="multipart/form-data">');
        res.write('<h1>SELECT TWO FILES</h1>');
        res.write('<input type="file" name="file1" ><br>');
        res.write('<input type="file" name="file2" ></br>');
        res.write('<input type="submit">');
        res.end();
    }
    else if(req.url=='/append')
    {
        const form=new formidable.IncomingForm();
        form.parse(req,function(err,feilds,files)
        {
            if(!err)
            {
                let w=fs.createWriteStream(files.file2.name,{flags:'a'});
                let r=fs.createReadStream(files.file1.name);

                w.on('close',function()
                {
                    console.log("writing Done");
                });
                r.pipe(w);
                res.write(files.file1.name)
                res.end("Append Succesfully");
            }
            else
            {
                res.write("Error in Writing File");
            }
        });
    }
    else
    {
        res.end('page not found')
    }
});
Server.listen(8080);
