const   mongoose = require('mongoose'),
        Campground = require('./models/campground'),
        faker = require('faker');

// CREATE DUMMY CAMPS
let seedDB = () => {
    for (let i = 0; i < 10; i++) {
        Campground.create({
            name: `${faker.address.city()} ${faker.address.streetSuffix()}`,
            image: `https://loremflickr.com/${faker.random.number({min:398, max:402})}/${faker.random.number({min:298, max:302})}/beach?random=${faker.random.number()}`,
            location: `${faker.address.city()}, ${faker.address.state()}`,
            description: `${faker.lorem.paragraph()}`
        })
    }
}

// REMOVE ALL DUMMY DATA
let removeDB = () => {
    Campground.deleteMany({}, (err) => {
        if (err) {
            console.log(err)
        }
    });
}

module.exports = {seedDB: seedDB, removeDB: removeDB};