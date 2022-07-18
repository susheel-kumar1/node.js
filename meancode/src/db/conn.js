//  this is creation the database...
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ourshow', { 

// these all are oppose to the depcrication warnings
}).then( ()=>{

    console.log('connection successful')
}).catch((e)=>{
console.log('not connect')

})

