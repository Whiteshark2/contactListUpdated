const User=require('../models/user')



module.exports.home=function(req,res){
    Contact.find({}).then(contacts=>{
        return res.render('home',
    {title:"contact list"
    ,contact_list:contacts})})}
    


module.exports.create=function(req,res){
    console.log(req.body)
    return res.redirect('back')
}