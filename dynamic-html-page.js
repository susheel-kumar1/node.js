//  make dynamic html pages in nodejs with folder and with html extentsion 
// first create public folder and html page inside this folder.

const express=require('express');
const apps=express();
const path=require('path');

const publicpath=path.join(__dirname,"public");
apps.use(express.static(publicpath));
apps.listen(5000);

//  express.static this is load the static content and page on the browser

