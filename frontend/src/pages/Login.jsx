import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { Card, CardContent, TextField, Button, Typography } from "@mui/material"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async(e)=>{

e.preventDefault()

try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{email,password}
)

localStorage.setItem("user",JSON.stringify(res.data))

navigate("/app")

}catch(err){

console.error(err)
alert("Invalid email or password")

}

}

return(

<div style={{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#1e3a8a,#0f172a)"
}}>

<Card sx={{width:360,borderRadius:3}}>

<CardContent>

<Typography variant="h5" align="center">
Smart IT Helpdesk
</Typography>

<form onSubmit={handleLogin}>

<TextField
label="Email"
fullWidth
margin="normal"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<TextField
type="password"
label="Password"
fullWidth
margin="normal"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<Button
variant="contained"
type="submit"
fullWidth
sx={{mt:2}}
>
Login
</Button>

</form>

<Typography align="center" sx={{mt:2}}>

Don't have an account?  
<Link to="/register"> Register</Link>

</Typography>

</CardContent>

</Card>

</div>

)

}

export default Login