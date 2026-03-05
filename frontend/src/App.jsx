import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

import Dashboard from "./pages/Dashboard"
import Incidents from "./pages/Incidents"
import CreateTicket from "./pages/CreateTicket"
import Analytics from "./pages/Analytics"
import KnowledgeBase from "./pages/KnowledgeBase"
import Activity from "./pages/Activity"

import Login from "./pages/Login"
import Register from "./pages/Register"

const isAuthenticated = () => {
return localStorage.getItem("user") !== null
}

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route
path="/app/*"
element={
isAuthenticated() ? <MainLayout/> : <Navigate to="/login"/>
}
/>

</Routes>

</BrowserRouter>

)

}

function MainLayout(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{flex:1}}>

<Topbar/>

<div style={{padding:"25px"}}>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/incidents" element={<Incidents/>}/>
<Route path="/create" element={<CreateTicket/>}/>
<Route path="/analytics" element={<Analytics/>}/>
<Route path="/knowledge" element={<KnowledgeBase/>}/>
<Route path="/activity" element={<Activity/>}/>

</Routes>

</div>

</div>

</div>

)

}

export default App