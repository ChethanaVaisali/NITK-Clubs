const express = require('express');
const router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'vaishu',
	port     : '3306',
	password : 'vaishu',
	database : 'nitk_clubs'
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected");
	} else {
		console.log("Error while connecting with database");
	}
});


router.post('/login', function(req,res){
	var student_id = req.body.username;
	var password = req.body.password;

	connection.query('SELECT * FROM student WHERE student_id = ?',[student_id], function (error, results, fields) {
	if (error) {
	console.log("error ocurred",error);
	res.send({
	  "code":400,
	  "failed":"error ocurred"
	});
	}else{
	console.log('The solution is: ', results);
	if(results.length >0){
	  if(results[0].student_id == password){
		res.send({
		  "code":200,
		  "success":"login sucessfull",
		  "row":results
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
});

router.post('/admin/postEvent',function(req,res){
  var club_id=re.body.club_id;
  var edate=req.body.edate;
  var name=re.body.name;
  var likes=0;
  var sql="INSERT INTO event(club_id,edate,name,likes) VALUES ?";
  values=[[club_id,edate,name,likes]];
  connection.query(sql,[values],function (err,result,fields) {
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.get('/events/:id', function(req,res){
  id=req.params.id;
  console.log(id);
  connection.query("SELECT * FROM event where club_id=?",[id],function (err,result,fields) {
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true, result:result});
    }
  })
});

router.post('/thread',function(req,res){
  var student_name=req.body.student_name;
  var event_id=req.body.event_id;
  var comment=req.body.comment;
  var sql="INSERT INTO thread(event_id,comment,student_name) VALUES ?";
  var values=[[event_id,comment,student_name]];
  connection.query(sql,[values],function (err,result,fields) {
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.get('/getThreads/:id',function(req,res){
  var event_id=req.params.id;
  connection.query("SELECT * FROM thread WHERE event_id = ?", [event_id],function(err,result,fields){
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.post('/updateLike',function (req,res) {
  console.log("In update");
  var event_id=req.body.id;
  connection.query("UPDATE event set likes=likes+1 where event_id = ?",[event_id],function (err,result,fields) {
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.post('/addPost',function(req,res){
  var edate=req.body.edate;
  var club_id=req.body.club_id;
  var name=req.body.name;
  var tags=req.body.tags;
  var likes=0;
  var sql="INSERT INTO event(club_id,edate, name, tags,likes) values ?";
  var values=[[club_id,edate,name,tags,likes]];
  connection.query(sql,[values],(err,result,fields)=>{
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  })
});

router.delete('/deletePost/:id',function(req,res){
  var event_id=req.params.id;
  connection.query("DELETE FROM event where event_id=?",[event_id],function(err,result,fields){
    if(err){
      res.json({success:false,err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  })
});

router.post('/addStudentMember',function(req,res){
  var name =req.body.name;
  var club_id=req.body.club_id;

  connection.query("SELECT student_id FROM student where name=? LIMIT 1",[name],function(err,result1,fields){
    if(err){
      res.json({success:false, err:err});
    }
    else{
      console.log(result1[0].student_id);
      var sql="INSERT INTO stclub VALUES ?";
      var values=[[result1[0].student_id,club_id]];
      connection.query(sql,[values],function (err,result,fields){
        if(err){
          res.json({success:false,err:err});
        }
        else{
          res.json({success:true, result:result});
        }
      });
    }
  });


});

router.get('/getStudentMembers/:id',function(req,res){
  var club_id=req.params.id;
  connection.query("SELECT * FROM stclub join student on stclub.student_id=student.student_id where club_id = ?",[club_id],function(err,result,fields){
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.post('/deleteStudentMember',function(req,res){
  var student_id=req.body.student_id;
  var club_id=req.body.club_id;
  connection.query("DELETE FROM stclub where student_id = ? AND club_id=?",[student_id,club_id],function(err,result,fields){
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

router.get('/getClub/:id',function(req,res){
  var student_id=req.params.id;
  connection.query("SELECT name FROM stclub join club on stclub.club_id=club.club_id where stclub.student_id = ?",[student_id],function(err,result,fields){
    if(err){
      res.json({success:false, err:err});
    }
    else{
      res.json({success:true,result:result});
    }
  });
});

module.exports = router;
