import { Card, CardContent, Typography, Grid } from "@mui/material"

function Dashboard(){

return(

<div>

<h2>Dashboard</h2>

<Grid container spacing={3}>

<Grid item xs={12} md={3}>
<Card sx={{background:"#3b82f6",color:"white"}}>
<CardContent>
<Typography>Total Tickets</Typography>
<Typography variant="h4">24</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{background:"#ef4444",color:"white"}}>
<CardContent>
<Typography>Open Tickets</Typography>
<Typography variant="h4">12</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{background:"#10b981",color:"white"}}>
<CardContent>
<Typography>Resolved</Typography>
<Typography variant="h4">8</Typography>
</CardContent>
</Card>
</Grid>

<Grid item xs={12} md={3}>
<Card sx={{background:"#f59e0b",color:"white"}}>
<CardContent>
<Typography>SLA Breaches</Typography>
<Typography variant="h4">4</Typography>
</CardContent>
</Card>
</Grid>

</Grid>

</div>

)

}

export default Dashboard