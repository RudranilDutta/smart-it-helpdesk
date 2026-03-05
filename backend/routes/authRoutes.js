const express = require("express")
const router = express.Router()
const db = require("../config/db")

router.post("/login",(req,res)=>{

const {email,password} = req.body

db.query(
"SELECT * FROM users WHERE email=? AND password=?",
[email,password],
(err,result)=>{

if(err){
return res.status(500).json(err)
}

if(result.length === 0){
return res.status(401).json({
message:"Invalid email or password"
})
}

res.json(result[0])

})

})

router.post("/register",(req,res)=>{

const {name,email,password} = req.body

db.query(
"INSERT INTO users(name,email,password,role) VALUES (?,?,?,?)",
[name,email,password,"user"],
(err,result)=>{

if(err){
return res.status(500).json(err)
}

res.json({
name,
email,
role:"user"
})

})

})

module.exports = router