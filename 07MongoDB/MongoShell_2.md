for(var i=0;i<10;i++) {
   db.things.insert({x:i});
}

db.things.find();

db.things.remove({});

show collections;

db.things.drop();

for(var i=0;i<20;i++) {
   db.things.insert({x:i});
}

// or operator \\

// x equals 2 or x equals 4
db.things.find({ $or: [{x:2}, {x:4}] });

// task: find all things where x equals 2 or x > 6
db.things.find({ $or: [{x:2}, {x: {$gt: 6} }] });

// x > 15 and x < 20
db.things.find({ $and: [{x:{$gt:15}}, {x:{$lt:20}}] });

// task: show all documents that are between 0 and 5 or between 15 and 20

db.things.find({ 
	$or: [{$and: [{x:{$gt:0}}, {x:{$lt:5}}]}, {$and: [{x:{$gt:15}}, {x:{$lt:20}}]}]
});


// copying documents from one collection to another collection

db.things.findOne();

db.things.find({x:{$gt:10}}).forEach(function(document) {
	db.otherThings.insert(document)
});

// task: add all numbers from things that are even to the
//       collection evenThings. therefore, look up
// 	 the operator $mod on google.

db.things.find({x:{$mod: [2, 0] }}).forEach(function(document) {
	db.evenThings.insert(document);
});

/////// student queries


db.students.insert([
	{name: 'mark', age: 31, subjects: ['math', 'journalism', 'programming'], gender: 'm'},
	{name: 'sandra', age: 28, subjects: ['sport', 'german', 'english'], gender: 'f' },
	{name: 'paul', age: 20, subjects: ['history', 'english', 'math'], gender: 'm' },
	{name: 'stefan', age: 22, subjects: ['arabic', 'english', 'history'], gender: 'm' },
	{name: 'katja', age: 29, subjects: ['history', 'german', 'arabic'], gender: 'f' },
	{name: 'julia', age: 25, subjects: ['german', 'sport', 'math'], gender: 'f' }
]);

// task: name is sandra or katja

// task: name is sandra or age is greater than 25
db.students.find({
	$or: [{name: 'paul'}, {age: {$gt: 25}]
});

// all students who are enrolled in arabic
db.students.find({ subjects: {$in: ['history']} });

// task: all students who are between 25 and 30 and are enrolled in history
db.students.find({ 
	$and: [{age: {$gt: 25}}, {age: {$lt: 30}}], 
	subjects: {$in: ['history']}
});
	

// all students who are not enrolled in history
db.students.find({subjects: {$nin:['history']}});

// task: all students who are enrolled in math and not in sport

db.students.find({
	$and: [{subjects: {$in: ['math']}}, {subjects: {$nin: ['sport']}}]
});

// aggregation functions \\

db.students.aggregate([{$group: {_id: "$gender"}}]);

// now adding a aggregation function to that

db.students.aggregate([{$group: {_id: "$gender", result: {$sum: 1}}}]);

// max age per gender

db.students.aggregate([{$group: {_id: "$gender", maxage: {$max: "$age"}}}]);

// min age per gender

db.students.aggregate([{$group: {_id: "$gender", maxage: {$min: "$age"}}}]);

// task: find the average age per gender and the average age in total of all students

// per gender
db.students.aggregate([{$group: {_id: "$gender", avgage: {$avg: "$age"}}}]);

// task: in total
db.students.aggregate([{$group: {_id: null, avgage: {"$avg":"$age"}}}]);


// nested documents 

db.foos.insert({x:1});
db.foos.find();
db.foos.insert({x:2, y:{z:1}});

db.foos.find();
db.foos.find({x:1});
db.foos.find({y:{z:1}});
db.foos.insert({x:3, y:{z:1, b:5}});
// no result here
db.foos.find({y:{z:1}});
db.foos.find({"y.z":1});


db.createCollection('someLetters');
db.someLetters.insert([
 {str: 'AA'},
 {str: 'AB'},
 {str: 'CC'},
 {str: 'CE'}
]);


db.someLetters.find({str: /A/});
{ "_id" : ObjectId("5a666341b96f5fde2b1939ee"), "str" : "AA" }
{ "_id" : ObjectId("5a666341b96f5fde2b1939ef"), "str" : "AB" }

db.someLetters.find({str: /^A/});
{ "_id" : ObjectId("5a666341b96f5fde2b1939ee"), "str" : "AA" }
{ "_id" : ObjectId("5a666341b96f5fde2b1939ef"), "str" : "AB" }

db.someLetters.find({str: /^A$/});
db.someLetters.find({str: /A$/});

{ "_id" : ObjectId("5a666341b96f5fde2b1939ee"), "str" : "AA" }




db.customers.insert(
[
	{
	 firstname: 'anton',
	 lastname: 'meier',
	 birthdate: new Date("1989-04-02"),
	 address:
		 { street: 'Hauptstr. 1', postal: '13305', city: 'Berlin' },
	 orders: [
		   {sum: 120, created: new Date("2018-01-04")},
		   {sum: 140, created: new Date("2018-01-07")}
		 ]
	},
	{
	 name: 'julia',
	 lastname: 'mueller',
	 birthdate: new Date("1972-08-10"),
	 address: { street: 'Schillerstr. 5', postal: '12345', city: 'Osnabrueck' },
	 orders: [
		{sum: 50, created: new Date("2018-01-04")},
		{sum: 70, created: new Date("2018-01-07")},
		{sum: 90, created: new Date("2018-01-10")}
		 ]
	},
	{
	 firstname: 'gert',
	 lastname: 'hamilkov',
	 birthdate: new Date("1985-05-12"),
	 address:{ street: 'Schillerstr. 15', postal: '10305', city: 'Berlin' },
	 orders: [
		{sum: 40, created: new Date("2018-01-04")},
		{sum: 5, created: new Date("2018-01-07")},
		{sum: 10, created: new Date("2018-01-10")}
		]
	}
]);

// task :get all customers who have postal 13305
db.customers.find({"address.postal":"13305"});

// task: get all customers who live in Schillerstr.
db.customers.find({"address.street": /^A$/});

// task: anton gets an additional address. everything stays the same except his street:
// he has got a second apartment at haupstrasse 4.
// 1. update his address to be an array instead of a single object. 
// 2. add his second apartment at haupstraße 4 into that array. google for $push operator









