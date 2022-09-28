const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "dev@12345",
    database: "mydatabase"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("api/get",(req,res)=>{
    const sqlGet = "SELECT * FROM mydatabase";
    db.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app.post("/api/post",(req,res)=>{
    const {name,pan,gst,acc} = req.body;
    const sqlInsert = "INSERT INTO mydatabase(name,pan,gst,acc) VALUES(?,?,?)";
    db.query(sqlInsert,[name, pan, gst , acc],(error,result)=>{
        if(error){
            console.log(error);
        }
    });
});

app.get("/",(req,res)=>{
    res.send("Hello ExpressJs");
})

app.listen(5000, () =>{
    console.log("Port 5000 activate.");
})