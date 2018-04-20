var http = require('http');
var mysql = require('mysql')

function onRequest(request,response){
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Content-Type":"text/plain"}); 
	response.write("simpleGymSite");
	response.end();
}

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "simplegymapp"
  });
  
  con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	var sql = "SHOW TABLES;";
  	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result " + result);
  });
  });

http.createServer(onRequest).listen(8080);
console.log("Server is running ...");
