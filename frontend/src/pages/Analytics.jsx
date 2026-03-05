import { useEffect,useState } from "react"
import axios from "axios"
import { PieChart,Pie,Cell,Tooltip } from "recharts"

function Analytics(){

const [data,setData] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/incidents/all")
.then(res=>{

const incidents = res.data

const open = incidents.filter(i=>i.status==="Open").length
const resolved = incidents.filter(i=>i.status==="Resolved").length
const closed = incidents.filter(i=>i.status==="Closed").length

setData([
{ name:"Open",value:open },
{ name:"Resolved",value:resolved },
{ name:"Closed",value:closed }
])

})

},[])

return(

<div>

<h2>Incident Analytics</h2>

<PieChart width={400} height={400}>

<Pie data={data} dataKey="value" outerRadius={150}>

<Cell fill="#ef4444"/>
<Cell fill="#f59e0b"/>
<Cell fill="#10b981"/>

</Pie>

<Tooltip/>

</PieChart>

</div>

)

}

export default Analytics