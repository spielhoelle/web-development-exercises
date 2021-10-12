var express = require('express');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send({
		info: 'student crud api'
	})
});

// var studentSchema = new Schema({
// 	name: String,
// 	age: Number,
// 	subjects: Array,
// 	gender: String,
// 	address: Schema.Types.Mixed
// });

// add a new student
app.post('/student', function(req, res) {
	// here we take req.body for the new student

	if(!req.body.name || !req.body.age || !req.body.subjects || !req.body.address) {
		return res.send({ error: 'name, age, subjects, address is required' });
	}

	MongoClient.connect(url, function(err, db) {
		if (err) return res.send({ error: err });
		var dbo = db.db("studentdb");
		var newStudent = { 
			name: req.body.name,	
			age: req.body.age,	
			subjects: req.body.subjects,	
			address: req.body.address
		};
		dbo.collection("students").insertOne(newStudent, function(err, dbres) {
			if (err) return res.send({ error: err });
			db.close();
			return res.send({ error: 0, insertId: dbres.insertedId });
		});
	});	
});

// load student info via id 
app.get('/student', function(req, res) {
	// read statement
	// Student.findById(req.params.id, function(err, student) {

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("studentdb");

		if(!req.query.q) {
			dbo.collection('students').find({ }).toArray(function(err, dbres) {
				if (err) res.send({ error: err });
				db.close();
				return res.send(dbres);
			});
		}
		else {			
			let id = null;
			try {
				id = new mongo.ObjectId(req.query.q);
			}
			catch(err) {
				return res.send({ error: err.toString() });				
			}
			
			dbo.collection('students').findOne({'_id': id }, function(err, dbres) {
				if (err) res.send({ error: err });
				db.close();
				return res.send(dbres);
			});			
		}
	});	
});

// update statement
app.put('/student/:id', function(req, res) {

	// 	// check all params that are set in req.body and attach/overwrite the student object
	// 	for(attr in req.body) {
	// 		student[attr] = req.body[attr];
	// 	}

	MongoClient.connect(url, function(err, db) {
		if (err) return res.send({ error: err });
		var dbo = db.db("studentdb");
		var newValues = { $set: req.body };

		let id = null;
		try {
			id = new mongo.ObjectId(req.params.id);
		}
		catch(err) {
			return res.send({ error: err.toString() });				
		}

		dbo.collection("students").updateOne({'_id': id}, newValues, function(err, dbres) {
			if (err) return res.send({ error: err });
			db.close();
			return res.send({ error: 0, result: dbres });
		});
	});


});

// delete a student
app.delete('/student/:id', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) return res.send({ error: err });
		var dbo = db.db("studentdb");

		let id = null;
		try {
			id = new mongo.ObjectId(req.params.id);
		}
		catch(err) {
			return res.send({ error: err.toString() });				
		}

		dbo.collection("students").deleteOne({'_id': id}, function(err, dbres) {
			if (err) return res.send({ error: err });
			db.close();
			return res.send({ error: 0, result: dbres });
		});
	});
});

app.listen(3000, function() {
	console.log('app listening on port 3000');
});