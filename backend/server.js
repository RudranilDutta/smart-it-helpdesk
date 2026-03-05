const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const kbRoutes = require("./routes/kbRoutes")
const authRoutes = require("./routes/authRoutes")



const incidentRoutes = require("./routes/incidentRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/incidents",incidentRoutes)
app.use("/api/kb",kbRoutes)
app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
res.send("Smart IT Helpdesk Backend Running")
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})