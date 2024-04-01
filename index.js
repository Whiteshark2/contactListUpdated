const express =require('express')
const dotenv=require('dotenv')
dotenv.config()
const path=require('path')
const port=Process.env.PORT
const app=express()
const db=require('./config/mongoose')
const session=require('express-session')
const passport=require('passport')
const passportLocal=require('./config/passport_local')
const MongoStore=require('connect-mongo')
const cookieParser=require('cookie-parser')
const expressLayouts = require('express-ejs-layouts')



app.use(expressLayouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(cookieParser())
app.use(express.urlencoded());
app.use(express.static('assets'))
app.use(session({
    name:"contact",
    secret:"contactlist",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*100
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/contactlist',
        autoRemove:'disabled'
      })
    
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)

app.use('/',require('./routes'))






app.listen(port,function(err){
    if(err){
        console.log("error occured")
    }
    console.log("Server is running on port",port)
})