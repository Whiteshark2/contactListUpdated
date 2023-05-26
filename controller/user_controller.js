const User=require('../models/user')
const Contact=require('../models/contact')

module.exports.home=function(req,res){
    return res.render('home')
}
module.exports.signup=function(req,res){
    return res.render('sign-up')
}
module.exports.create= async function(req,res){
   if(req.body.password!=req.body.confirmPassword){
    return res.redirect('back')
   }
   const user= await User.findOne({email:req.body.email})
   if(!user){
    User.create(req.body)
    return res.redirect('/signin')
   }else{
    return res.redirect('back')
   }
}

module.exports.signin=function(req,res){
    return res.render('sign-in')
}
module.exports.createSession=function(req,res){
    return res.redirect('/list')
}

module.exports.list= async function(req,res){
    const phone=await Contact.find({user:req.user.id})
    return res.render('list',{
        phone:phone
    })
}

module.exports.logout= function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/signin');
    });
  }

module.exports.createContact= async function(req,res){
    const list={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        user:req.user.id
    }
    const contact=Contact.create(list)
    return res.redirect('back')
}

module.exports.deleteContact= async function(req,res){
    let id=req.query.id
    const del=await Contact.findByIdAndDelete(id)
    return res.redirect('back')
}
    

