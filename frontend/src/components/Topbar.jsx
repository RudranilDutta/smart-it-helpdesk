import { useNavigate } from "react-router-dom"

function Topbar(){

const navigate = useNavigate()

const user = JSON.parse(localStorage.getItem("user"))

const logout = ()=>{

localStorage.removeItem("user")
navigate("/login")

}

return(

<div style={{
height:"60px",
background:"#1f2937",
color:"white",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"0 20px"
}}>

<h3>Smart IT Helpdesk</h3>

<div>

<span style={{marginRight:"20px"}}>
{user?.name}
</span>

<button onClick={logout}>
Logout
</button>

</div>

</div>

)

}

export default Topbar