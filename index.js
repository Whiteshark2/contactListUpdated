const express =require('express')
const path=require('path')
const port=8000
const app=express()
const db=require('./config/mongoose')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(express.static('assets'))


app.use('/', require('./routes'));




app.listen(port,function(err){
    if(err){
        console.log("error occured")
    }
    console.log("Server is running on port",port)
})