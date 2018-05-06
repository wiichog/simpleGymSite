var http = require('http');
var mysql = require('mysql')
var express = require('express');
var app = express();




//mysqlQuery("UPDATE `rutinausuario` SET`status`=1 WHERE `fechaFinal`<CURDATE()","updateRutinas");

app.get('/crearRutina', function(req, res) {
	console.log('****crearRutina****')
	const connection = mysql.createConnection({host: "localhost",user: "root",password: "",database: "simplegymapp"});
	var userId = req.query.userId;
	console.log('userId = '+ userId +'')
	connection.connect(function(err) {
	if (err) throw err;
		var result = connection.query("SELECT `fechaFinal` from rutinausuario where `idUsuario`="+ userId +" and status = 0", function (err, result) {
				if (err) throw err;
				if (typeof result[0] === "undefined") {
							var date = new Date();
							date.setDate(date.getDate() + 7);
							var ejercicios = []
							for(var i=0; i<=3;i++){
								ejercicios.push(Math.floor(Math.random() * 9) + 1)
							}
							for(var i=0; i<=3;i++){
								ejercicios.push(Math.floor(Math.random() * 14) + 10)
							}
							for(var i=0; i<=3;i++){
								ejercicios.push(Math.floor(Math.random() * 21) + 15)
							}
							for(var i=0; i<=3;i++){
								ejercicios.push(Math.floor(Math.random() * 25) + 22)
							}
							var ejerciciosFinales = JSON.stringify(ejercicios)
							var today = new Date();
							var fechaInicio = today.getFullYear().toString() + '-'  + today.getMonth().toString() + '-' + (today.getDay()-1).toString()+ ' 00:00:00';
							var fechaFinal = date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + (date.getDay()+6).toString()+ ' 00:00:00';
							connection.query("INSERT INTO `rutinausuario`(`idUsuario`, `rutina`, `fechaInicio`, `fechaFinal`, `status`) VALUES ("+userId+",'"+ejerciciosFinales+"','"+fechaInicio+"','"+fechaFinal+"',0)", function (err, result) {
								if (err) throw err;
								res.json("0");
							})
				}
				else{
							res.json("1");
				}
		});
	});
  console.log('********')
});

app.get('/traerRutinas', function(req, res) {
	console.log('****traerRutinas****')
	const connection = mysql.createConnection({host: "localhost",user: "root",password: "",database: "simplegymapp"});
	var userId = "1"
	console.log('userId = '+ userId +'')
	
	connection.connect(function(err) {
	if (err) throw err;
		var result = connection.query("Select rutina from rutinausuario where idusuario = '"+ userId +"' and status = 0", function (err, result) {
			if (err) throw err;
			var rutina = JSON.parse(result[0].rutina);
			connection.query("Select * from ejercicios where id in ("+rutina.toString()+")",function(err,resultado){
				res.json(resultado)
			});
		});
	});
  console.log('********')
}); 




app.listen(8080, function () {
  console.log('App listening on port 8080!');
});
