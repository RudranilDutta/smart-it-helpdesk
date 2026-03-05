const express = require("express")
const router = express.Router()
const db = require("../config/db")

router.get("/all",(req,res)=>{

db.query("SELECT * FROM knowledge_base",(err,result)=>{

if(err){
return res.status(500).json(err)
}

res.json(result)

})

})

module.exports = router