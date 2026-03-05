import { useState } from "react"
import axios from "axios"

function CreateIncident(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

await axios.post("http://localhost:5000/api/incidents/create",{
title,
description
})

alert("Ticket created with smart classification")

setTitle("")
setDescription("")

}

return(

<div>

<h2>Create Ticket</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Describe your issue"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<button type="submit">
Create Ticket
</button>

</form>

</div>

)

}

export default CreateIncident