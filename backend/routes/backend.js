var express = require('express');
var router = express.Router();
var con = require(__dirname + '/../bin/db.js');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

router.post('/add', (req, res) => {
    fname = req.body.data.firstname;
    lname = req.body.data.lastname;
    mno=req.body.data.mobilenumber;
    email = req.body.data.email;
    psd = req.body.data.password;
    radio=req.body.data.selectedValue;
    //category= req.body.data.category;

    data = {firstName:fname,lastName:lname,mobileNo:mno,email:email,password:psd,category:radio}

    console.log(data);
    con.query("INSERT INTO userDetails SET ? ", data, function (err, rows) {
      if (!err) 
        res.status(200).json([{
          status: 'success',
          insertID: rows.insertId
        }])   
      else
        res.status(502).json([{
          status: 'failed',
          errMsg: 'Error while inserting data.'
        }])
    })
  })

/* GET users listing. */
router.get('/select', function (req, res, next) {

    con.query('SELECT * from userDetails ', function (err, rows, fields) {
      if (!err)
        res.json({
          status: 'success',
          data: rows,
        })
        
      else
        res.json([{
          status: 'failed',
          errMsg: 'Error while performing query.'
        }])
    });
  
  });

  router.get('/login', function (req, res, next) {
    var email= req.body.data.email;
    var password = req.body.data.password;
    console.log(email);
    console.log(password);
    console.log(data)
    connection.query('SELECT * FROM tesko WHERE username = ?',[emai], function (error, results, fields) {
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        // console.log('The solution is: ', results);
        if(results.length >0){
          if([0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        
          }
          else{
            res.send({
              "code":204,
              "success":"Email and password does not match"
                });
          }
        }
        else{
          res.send({
            "code":204,
            "success":"Email does not exits"
              });
        }
      }
    








    
    });
  })

  module.exports = router;
