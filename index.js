import express from "express"
import bodyParser from "body-parser";

const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.send("hii");
})

app.post('/data',(req,res,_)=>{
    console.log("hi")
    console.log(req.body);
    res.send("data reached")
})

app.listen(3000,()=>{
    console.log("server started")
})