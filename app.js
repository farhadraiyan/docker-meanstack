const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const path=require("path");

const app=express();
//the cor has to be use before the route
app.use(cors());
const route=require("./routes/route");
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

app.use(bodyparser.json());
app.use('/', route);

//adding middlewire
app.use(cors());


//static files
app.use(express.static(path.join(__dirname,'public')));
//port

const port=3000;

app.listen(port,()=>
{
    console.log(`listening to ${port}`)

})