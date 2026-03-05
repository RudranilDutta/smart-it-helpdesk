const db = require("../config/db")

exports.createIncident = (req,res)=>{

const {title,description} = req.body

let category="General"
let priority="Low"
let assigned_team="IT Support"

const text = description.toLowerCase()

if(text.includes("vpn") || text.includes("network")){
category="Network"
priority="High"
assigned_team="Network Team"
}

else if(text.includes("email") || text.includes("outlook")){
category="Email"
priority="Medium"
assigned_team="IT Support"
}

else if(text.includes("software") || text.includes("application")){
category="Software"
priority="Medium"
assigned_team="Application Team"
}

const status="Open"

let hours=24

if(priority==="High") hours=2
if(priority==="Medium") hours=6

const now = new Date()
const sla_deadline = new Date(now.getTime()+hours*60*60*1000)

const query = `
INSERT INTO incidents 
(title,description,category,priority,status,assigned_team,sla_deadline)
VALUES (?,?,?,?,?,?,?)
`

db.query(query,
[title,description,category,priority,status,assigned_team,sla_deadline],
(err,result)=>{

if(err){
return res.status(500).json(err)
}

res.json({
message:"Incident created with AI classification",
category,
priority,
assigned_team
})

})

}

exports.getIncidents=(req,res)=>{
db.query("SELECT * FROM incidents",(err,result)=>{
if(err){
return res.status(500).json(err)
}
res.json(result)
})
}
exports.updateStatus = (req,res)=>{

const {id} = req.params
const {status} = req.body

const query = "UPDATE incidents SET status=? WHERE incident_id=?"

db.query(query,[status,id],(err,result)=>{
if(err){
return res.status(500).json(err)
}

res.json({message:"Status Updated"})
})

}