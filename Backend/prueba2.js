const os = require("os");
const fs = require("fs");

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
let cpu_string = JSON.stringify(cpu);

fs.appendFile("nuevo.txt",`informacion de la cpu: ${cpu_string}` , function(error){
    if(error){
        console.log("ERROR AL CREAR ARCHIVO")
    }
});
console.log(cpu)