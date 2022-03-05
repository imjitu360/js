var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentdb"
});
con.connect(function(err){
    if(err) throw err;
    var records=[['Ajay',25,87],['jitu',26,99],['Akshu',24,96],['Ram',22,85]];
    con.query("INSERT INTO students(name,rollno,marks) VALUES ?", [record],function(err,result,fields)
    {
        if (err) throw err;
        console.log(result);
        console.log("Number of rows affected : "+ result.affectedRows);
        console.log("Number of rows affected with warning: "+ result.warningCount);
        console.log("message from mysql server: "+ result.message);
    });
});