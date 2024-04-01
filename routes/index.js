const express=require('express')
const passport=require('passport')
const router=express.Router()
const controller=require('../controller/user_controller')

router.get('/',controller.home)
router.get('/signup',controller.signup)
router.post('/create',controller.create)
router.get('/signin',controller.signin)
router.post('/createSession',passport.authenticate('local',{
    failureMessage:"failed",
    failureRedirect:'/signin'
    }),controller.createSession)

router.get('/list',passport.checkAuthentication,controller.list)

router.get('/logout',controller.logout)

router.post('/create-contact',controller.createContact)

router.get('/delete-contact/',controller.deleteContact)



module.exports=router