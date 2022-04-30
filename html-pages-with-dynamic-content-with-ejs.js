// first install ejs ( npm i ejs )
// declare the ejs template engine engine... apps.set('view engine', 'ejs')
// create the views folder ( views name is by default ) then create html file inside it..

const express = require('express');
// template engine use for create dynamic pages

const apps = express();
const path = require('path');

const publicpath = path.join(__dirname, "public");

apps.set('view engine', 'ejs')

apps.get('', (req, resp) => {

    resp.sendFile(`${publicpath}/index.html`);
});

apps.get('/FILENAME', (res, resp) => {
     
  const information = {
        name: 'susheel',
        last: 'kumar',
        contact_no: '8906743900',
        add: 'noor nagar new delhi'
    }
    resp.render('FILENAME', { stories })
})

apps.get('/about', (req, resp) => {
    resp.sendFile(`${publicpath}/about.html`);
});

apps.get('*', (req, resp) => {
    resp.sendFile(`${publicpath}/pagenotfound.html`)
})

apps.listen(5000);


//  HTML CODE FOR EJS dynamic content

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Stories</title>
</head>
<body>
    
<h1>My Love</h1>
<p>  <%=stories.my_love%>  </p>


<h1>fist fear</h1>

<p><%=stories.first_fear%></p>
</body>
</html>



