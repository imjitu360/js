var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"inventory"
});
con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers",function(err,result,fields)
    {
        if (err) throw err;
        console.log(result);
    });
    var sql="DELETE FROM customers WHERE city='nashik'";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("numbers of records deleted: "+ result.affectedRows);
    });
});