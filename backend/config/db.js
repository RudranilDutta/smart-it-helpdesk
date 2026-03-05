const mysql = require("mysql2")

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Apple@1234",
database: "smart_it_helpdesk"
})

db.connect(err=>{
if(err){
console.log("Database error")
}else{
console.log("MySQL Connected")
}
})

module.exports=db