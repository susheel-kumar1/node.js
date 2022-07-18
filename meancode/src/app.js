const express = require('express');
const app = express();
const mongoose = require('mongoose')
const hbs = require('hbs')
const db=require('./db/conn')
// this is create the dynamic port to run the server and file... 
const ports = process.env.PORT || 5000;
const path = require('path');

// const DB = "mongodb+srv://susheel:suheel%123@cluster0.roaoc.mongodb.net/contact?retryWrites=true&w=majority";
// mongoose.connect(DB)
//     .then(() => {
//         console.log('connection successful');
//     })

//     .catch((err) => console.log('no conn'));

// const middlewere = (res, resp, next) => {
//     console.log('plz run now');
// }
// app.get('/', (res, resp, next) => {
//     resp.send('hello this is server');
//     next();
// })

// app.listen(4000);

const Episode = require('./models/register')
const curretpath = path.join(__dirname, './public')
const templatepath = path.join(__dirname, './templates/views')
const partialspath = path.join(__dirname, './templates/partials')
app.use(express.static(curretpath));
app.set('view engine', 'hbs')   //telling we using hbs...

app.set('views', templatepath);
hbs.registerPartials(partialspath);

app.use(express.json());   //  this is tell to express json danode_modules/package-json/package.jsonta format
app.use(express.urlencoded({ extended: false }));    // this is tell form data sumbitted data not be undefiend

// app.get('/', (req, resp) => {
//     resp.send('hello this is root file ');
// })

app.get('/', (req, resp) => {
    resp.render('index');
});

app.get('/login', (req, resp) => {
    resp.render('login');
});

app.get('/register', (req, resp) => {
    resp.render('register');
});

app.get('/dashboard', (res, resp) => {

    const order = {
        total_orders: 1099,
        clients: 657,
        followers: '62%',
        products_sold: '4.5M',
        income_target: '51%',
        expensive_larget: '66%',
        spending_target: '89%',
        total_target: '77%'
    }

    resp.render('dashboard', { order: order })
})


app.get('/contact', (req, resp) => {

    let objs = {
        Name: "susheel",
        age: 22,
        gualificatio: "diploma",
        add: "noon nagar 2nd",
        phone: "808999757"
    }
    resp.render('contact', { objs: objs })
})


app.get('*', (res, resp) => {

    var nots = "This is one kind of globle rediract page locators"
    resp.render('page_not_found', { nots })

})

app.post('/register', async (req, resp) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {

            const registrationdetail = new Episode({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword
            });

            const registered = await registrationdetail.save();

            resp.status(201).render('index');

        }

        else { resp.send("the password is not match") };


    } catch (error) {
        resp.status(400).send(error);
    }
});


app.listen(ports, () => {
    console.log(`plz run the server ${ports}`);

});


// http://www.murarilalsrsecschool.com/index.php  
