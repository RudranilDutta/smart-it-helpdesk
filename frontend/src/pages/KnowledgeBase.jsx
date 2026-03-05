import { useEffect,useState } from "react"
import axios from "axios"

function KnowledgeBase(){

const [articles,setArticles] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/kb/all")
.then(res=>{
setArticles(res.data)
})

},[])

return(

<div>

<h2>Knowledge Base</h2>

<table border="1">

<thead>
<tr>
<th>Problem</th>
<th>Solution</th>
<th>Category</th>
</tr>
</thead>

<tbody>

{articles.map(a=>(
<tr key={a.id}>
<td>{a.problem}</td>
<td>{a.solution}</td>
<td>{a.category}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default KnowledgeBase