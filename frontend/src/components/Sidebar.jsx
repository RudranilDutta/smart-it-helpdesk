import { Link } from "react-router-dom"
import { useState } from "react"

import DashboardIcon from "@mui/icons-material/Dashboard"
import BugReportIcon from "@mui/icons-material/BugReport"
import AddIcon from "@mui/icons-material/Add"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import TimelineIcon from "@mui/icons-material/Timeline"
import MenuIcon from "@mui/icons-material/Menu"

function Sidebar(){

const [open,setOpen] = useState(true)

return(

<div
style={{
width: open ? "220px" : "70px",
height:"100vh",
background:"#0f172a",
color:"white",
transition:"0.3s",
padding:"10px"
}}
>

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<h3 style={{display: open ? "block" : "none"}}>
Helpdesk
</h3>

<MenuIcon
style={{cursor:"pointer"}}
onClick={()=>setOpen(!open)}
/>

</div>

<ul style={{listStyle:"none",padding:"0",marginTop:"20px"}}>

<li style={{marginBottom:"20px"}}>
<Link to="/app" style={{color:"white",textDecoration:"none"}}>
<DashboardIcon/> {open && "Dashboard"}
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link to="/app/incidents" style={{color:"white"}}>
<BugReportIcon/> {open && "Incidents"}
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link to="/app/create" style={{color:"white"}}>
<AddIcon/> {open && "Create Ticket"}
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link to="/app/analytics" style={{color:"white"}}>
<AnalyticsIcon/> {open && "Analytics"}
</Link>
</li>

<li style={{marginBottom:"20px"}}>
<Link to="/app/knowledge" style={{color:"white"}}>
<MenuBookIcon/> {open && "Knowledge Base"}
</Link>
</li>

<li>
<Link to="/app/activity" style={{color:"white"}}>
<TimelineIcon/> {open && "Activity"}
</Link>
</li>

</ul>

</div>

)

}

export default Sidebar