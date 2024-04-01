const mongoose=require('mongoose')
mongoose.connect(process.env.URL)

const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting DB'));
db.once('open',function(){
    console.log("Successfully Connected to DB")
})