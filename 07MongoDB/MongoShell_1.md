# MongoShell commands #1

Start the mongo shell for your local environment on `localhost:27017`  
`mongo`

## Show databases

`print('hallo world');`

##### Basic database operations  
`show dbs;`

##### Select a database  
`use test;`

##### Show all collections  
`show collections`

##### Create a new collections  
`db.createCollection("cars");`

##### Insert a new record into the database  
```
db.cars.insert({
  name: 'honda',
  make: 'accord',
  year: '2010'
});
```
with or without quotation marks, does not matter.

##### Find all records  
`db.cars.find()`

## Change records

##### Update key of record
`db.cars.update({ name: 'honda' }, { $set: { name: 'ford' } });`

First we look for an entry with the key `name` which has
the value `honda` and then we submit the `$set` object which
defines the record to change.

##### Add another key to the record
Now we want to add another key in the found object, first we try
with this:
```
db.cars.update(
  {
    name: 'ford'
  },
  {
    $set: {
      transmission: 'automatic'
  }
});
```

##### then here the corrected version:

```
db.cars.update({
  name: 'porsche'
},
{
  $set: {
    transmission: 'automatic'
  }
}, {
  upsert: true
});
```

## Delete record

`db.cars.remove({name:'ford'});`


## embedded javascript

for(var i=0;i<10;i++) {
 db.things.insert({x:i});
}

## sorting etc.

use example;
db.createCollections("studente");

db.student.insert({
  name: 'joe',
  undergrad: true,
  units: 9,
  classes: ['geography', 'math', 'journalism']
});

db.student.insert({
  name: 'jane',
  undergrad: false,
  units: 12,
  classes: ['geography', 'science', 'journalism', 'history']
});

db.student.insert({
  name: 'kevin',
  undergrad: true,
  units: 9,
  classes: ['geography']
});

db.student.insert({
  name: 'rachel',
  undergrad: false,
  units: 6,
  classes: ['geography', 'history']
});

db.student.find().pretty();

db.student.find({name:'rachel'});

db.student.find({units: {$gt: 6}});
db.student.find({units: {$lt: 7}});
db.student.find({classes: {$in: ['history']}});

db.student.find().sort({units: 1});
db.student.find().sort({units: -1});
db.student.find().sort({units: -1}).pretty();

db.student.find().sort({name: 1});
db.student.find().sort({name: -1});


db.student.find().sort({name: -1}).limit(2);
