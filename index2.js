var fs= require("fs");
var archivo = fs.readFileSync("./README.md", "utf8");

console.log(archivo);
