const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mangodb', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log('coonection success')
}).catch((error)=>{
    console.log('somting error',error)
})

