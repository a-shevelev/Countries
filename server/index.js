let express = require("express"), app = express();
let bodyParser = require("body-parser");
let urlParser = bodyParser.urlencoded({extended: false});
let mc = require("mongodb").MongoClient, url = "mongodb://localhost";
let db;

app.use(express.static("../client"));

mc.connect(url, function(err, client){
	if (err) console.log(err.stack);
	db = client.db("countries");
	app.listen(8000);
});

function getArray(){
	db.collection("areas").find({}).toArray(
	function(err, doc){
		for (country of doc){
			console.log(country.name, country.area, country.en)
		}
	
		});
}

app.post("/countries", urlParser, function(req, res){
	console.log(req.body);
	let bottom = Number (req.body.area_bottom);
	let top = Number(req.body.area_top);
	let bools = [true];
	if (req.body.english !== "on")
		bools.push(false);
	db.collection("areas").find({area: {$gte: bottom, $lte:top},en:{$in:bools}}).toArray(
	function(err, doc){
	if(err) console.log(err.stark)
	let string = JSON.stringify(doc);
	res.send(string);
	
		});
})



