function Activity(){

const activities=[
"Ticket #21 created",
"Ticket #18 resolved",
"New user registered",
"SLA breached for ticket #12"
]

return(

<div>

<h2>Recent Activity</h2>

<ul>

{activities.map((a,i)=>(
<li key={i}>{a}</li>
))}

</ul>

</div>

)

}

export default Activity