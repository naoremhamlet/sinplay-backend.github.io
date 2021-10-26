var Admin = require('express').Router();
const Dashboard = require("./comp/Dashboard");
const Delete = require("./comp/Delete");

const PASSWORD = process.env.ADMIN_PASS

function checkSignIn(req, res, next){
   if(req.session.user) next();
   else  res.redirect('/login')
}

Admin.get('/login', (req, res) => res.render('login', { log: "Sign In" }));

Admin.get('/admin', checkSignIn, Dashboard);

Admin.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect('/login');
});

Admin.post('/login', (req, res) => {
   if(!req.body.pass)   res.render('login', {log: "Please Log In"})
   else{
      if(PASSWORD == req.body.pass){
            req.session.user = PASSWORD
            res.redirect('/admin');
      }else
         res.render('login', {log: "Invalid credentials"})
   }
});

Admin.post('/delete_data', checkSignIn, Delete)


Admin.use('/admin', (req, res, next) => res.redirect('/login'));

exports.Admin = Admin;
