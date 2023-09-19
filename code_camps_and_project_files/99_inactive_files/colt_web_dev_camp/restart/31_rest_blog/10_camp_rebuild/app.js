// --------------------------------------------------------
// Name        Path            HTTP Verb   Purpose
// --------------------------------------------------------
// Index       /blogs           GET         List all blogs
// New         /blogs/new       GET         Show new blog form
// Create      /blogs           POST        Create a new blog, then redirect somewhere
// Show        /blogs/:id       GET         Show info about one specific blog
// Edit        /blogs/:id/edit  GET         Show edit form for one blog
// Update      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
// Destroy     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere

// ------------ REBUILD YELP CAMP WITH FAKER DATA ------------- -->

//APP SETUP 
const   express = require('express'),
        app = express(),
        mongoose = require('mongoose'),
        faker = require('faker'),
        methodOverride = require('method-override'),
        expressSanitizer = require('express-sanitizer');

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(expressSanitizer());

// MONGOOSE
mongoose.connect('mongodb://localhost/yelpCamp_2', {useNewUrlParser: true});

let campSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String
});

let Camp = mongoose.model('Camp', campSchema);

// CREATE DUMMY CAMPS
for(let i = 0 ; i < 5 ; i++){
    Camp.create({
        name: `${faker.address.city()} ${faker.address.streetSuffix()}`,
        image: `${faker.image.nature()}?random=${faker.random.number()}`,
        location: `${faker.address.city()}, ${faker.address.state()}`,
        description: `${faker.lorem.paragraph()}`
    })
}

// ROUTES
// INDEX ROUTE       /blogs           GET         List all blogs
app.get('/camps', (req, res, next)=>{
    Camp.find({}, (err, all_camps)=>{
        if(err){
            console.log(err)
        } else {
            res.render('index', {camps: all_camps})
        }
    })
})

app.get('/', (req, res, next)=>{
    res.redirect('/camps')
})

// NEW ROUTE         /blogs/new       GET         Show new blog form
app.get('/camps/new', (req, res, next)=>{
    res.render('new');
})

// CREATE ROUTE     /blogs           POST        Create a new blog, then redirect somewhere
app.post('/camps', (req, res, next)=>{
    Camp.create(req.body.camp, (err, new_camp)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/camps')
        }
    })
})

// SHOW ROUTE        /blogs/:id       GET         Show info about one specific blog
app.get('/camps/:id', (req, res, next)=>{
    Camp.findById(req.params.id, (err, found_camp)=>{
        if(err){
            console.log(err)
        } else {
            res.render('show', {camp: found_camp})
        }
    })
})

// EDIT ROUTE        /blogs/:id/edit  GET         Show edit form for one blog
app.get('/camps/:id/edit', (req, res, next)=>{
    Camp.findById(req.params.id, (err, found_camp)=>{
        if(err){
            console.log(err)
        } else {
            res.render('edit', {camp: found_camp})
        }
    })
})

// UPDATE ROUTE      /blogs/:id       PUT         Update a particular blog, then redirect somewhere
app.put('/camps/:id', (req, res, next)=>{
    Camp.findByIdAndUpdate(req.params.id, req.body.camp, (err, updated_camp)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/camps/' + req.params.id)
        }
    })
})

// DESTROY ROUTE     /blogs/:id       DELETE      Delete a particular blog, then redirect somewhere
app.delete('/camps/:id', (req, res, next)=>{
    Camp.findByIdAndRemove(req.params.id, (err, found_thing)=>{
        if(err){
            console.log(err)
        } else {
            res.redirect('/camps')
        }
    })
})






// 404 & SERVER
app.get('*', (req, res, next)=>{
    res.send("<h1>YOU'VE BEEN 404ed</h1>")
})

app.listen('3000', (req, res, next)=>{
    console.log('running on 3k')
})