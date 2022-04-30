
//  make dynamic html pages in nodejs with folder and hide html extentsion or create 404 page

// create public folder and html page inside this it.require path or run on browser 

const express = require('express');
const apps = express();
const path = require('path');

const publicpath = path.join(__dirname, "public");

apps.get('', (req, resp) => {

    resp.sendFile(`${publicpath}/index.html`);
});

apps.get('/about', (req, resp) => {
    resp.sendFile(`${publicpath}/about.html`);
});

apps.get('/blog', (req, resp) => {
    resp.sendFile(`${publicpath}/blog.html`);
});

apps.get('/contact', (req, resp) => {
    resp.sendFile(`${publicpath}/contact.html`)
})

apps.get('*', (req, resp) => {
    resp.sendFile(`${publicpath}/pagenotfound.html`)
})


apps.listen(5000);


