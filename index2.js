const http=require('http');
const site =http.createServer(function(req,res){
    console.log('Hello World');
    //res.write("yeah Go HTTP!!");
    res.setHeader('Content-Type','text/html');
    console.log(req.rawHeaders);
    res.end('<h1>Hello Class!</h1>');
});
site.listen(3000);