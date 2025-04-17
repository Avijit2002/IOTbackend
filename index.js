import express from "express"
import bodyParser from "body-parser";

const moisture = 0;
const vibration = 0;
const rain = 0;


const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.json({
        moisture,vibration,rain
    });
})

app.post('/data',(req,res,_)=>{
    //console.log("hi")
    console.log(req.body);
    res.send("data reached")

    moisture = req.body.moisture;
    vibration = req.body.vibration;
    rain = req.body.rain;
})

app.listen(3000,()=>{
    console.log("server started")
})