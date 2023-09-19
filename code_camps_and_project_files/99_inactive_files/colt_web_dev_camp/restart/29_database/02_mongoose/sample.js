// add people to db
// log each one

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goose_test', {
    useNewUrlParser: true
});

let personSchema = new mongoose.Schema({ // not a must but starter template
    name: String,
    age: Number,
    job: String
});

let Person = mongoose.model('Person', personSchema); // <singular version> of model

let emma = new Person({
    name: "Emma",
    age: 5,
    job: "Kid"
});

emma.save((err, person)=>{
    if(err){
        console.log('OOOOOOOOOPS on SAVE');
    } else {
        console.log('PERSON ADDED');
        console.log(person);
    }
});

// or.create