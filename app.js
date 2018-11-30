const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const path=require("path");

const app=express();
//the cor has to be use before the route
app.use(cors());
//all routes
const vidsRoute=require("./routes/videoroutes");
const adminRoutes=require("./routes/adminroutes");
const custRoutes=require("./routes/customerroutes");
//connect to mongodb
mongoose.connect("mongodb://FarhadHossain:Ekhane1987@ds121834.mlab.com:21834/videolibrary")
//on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to database");
})
//if error
mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log("error"+err)
    }
    
})

//adding middlewire
app.use(bodyparser.json());
app.use('/', vidsRoute);
app.use('/',adminRoutes);
app.use('/',custRoutes);
app.use(cors());


//static files
app.use(express.static(path.join(__dirname,'public')));


//port
const port= process.env.PORT | 3000;

app.listen(port,()=>
{
    console.log(`listening to ${port}`)

})