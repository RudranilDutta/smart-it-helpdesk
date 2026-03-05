import { useEffect, useState } from "react"
import axios from "axios"
import { Chip } from "@mui/material"

function IncidentList(){

const [incidents,setIncidents] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{

axios.get("http://localhost:5000/api/incidents/all")
.then(res=>{
setIncidents(res.data)
})
.catch(err=>{
console.log(err)
})

},[])

const updateStatus = async(id,status)=>{

await axios.put(`http://localhost:5000/api/incidents/update/${id}`,{
status
})

const res = await axios.get("http://localhost:5000/api/incidents/all")
setIncidents(res.data)

}

return(

<div>

<h2>Incident Dashboard</h2>

<input
placeholder="Search Ticket"
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{marginBottom:"20px",padding:"8px"}}
/>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>ID</th>
<th>Title</th>
<th>Category</th>
<th>Priority</th>
<th>Status</th>
<th>Assigned Team</th>
<th>SLA Deadline</th>
<th>SLA Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{incidents
.filter(inc =>
inc.title.toLowerCase().includes(search.toLowerCase())
)
.map((inc)=>{

const slaBreached =
new Date() > new Date(inc.sla_deadline) &&
inc.status !== "Closed"

return(

<tr
key={inc.incident_id}
style={{
background: slaBreached ? "#fee2e2" : "white"
}}
>

<td>{inc.incident_id}</td>

<td>{inc.title}</td>

<td>{inc.category}</td>

<td>

<Chip
label={inc.priority}
color={
inc.priority==="High"
? "error"
: inc.priority==="Medium"
? "warning"
: "success"
}
/>

</td>

<td>

<Chip
label={inc.status}
color={
inc.status==="Open"
? "error"
: inc.status==="Resolved"
? "success"
: "default"
}
/>

</td>

<td>{inc.assigned_team}</td>

<td>
{new Date(inc.sla_deadline).toLocaleString()}
</td>

<td>
{slaBreached ? "BREACHED" : "OK"}
</td>

<td>

<button
onClick={()=>updateStatus(inc.incident_id,"In Progress")}
>
Start
</button>

<button
onClick={()=>updateStatus(inc.incident_id,"Resolved")}
>
Resolve
</button>

<button
onClick={()=>updateStatus(inc.incident_id,"Closed")}
>
Close
</button>

</td>

</tr>

)

})}

</tbody>

</table>

</div>

)

}

export default IncidentList