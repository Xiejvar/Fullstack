const http = require("http")

const listenPort= 8080;

var fs = require("fs");

var nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jbg9993@gmail.com',
        pass: 'Javi1290'
    }
})

var mailOptions = {
    from: 'jbg9993@gmail.com',
    to: 'david.carvajal@thebridge.tech',
    subject: 'email de prueba',
    text: `Hola Guapeton`
}

const server = http.createServer((request, response) => {
if (request.url === "/"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>HOLA</h1>');
    response.end();
} else if(request.url === "/withfile"){
    fs.readFile('prueba.html', function(err, data){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write('<h1>PA TI MI COLA</h1>');
        return response.end();
    })
}else if(request.url === "/mail"){
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else {
            console.log('Email enviado: ' + info.response)
        }
    })
}
});

server.listen(listenPort);
console.log("Server started listening on " + listenPort);