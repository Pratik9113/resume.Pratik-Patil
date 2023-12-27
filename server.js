const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const path = require("path")
// dotenv configuation
dotenv.config()
// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())


// static files access
app.use(express.static(path.join(__dirname,'./chatting/build')))
// routes
// app.get('/' , (req,res)=>{
//     res.send(`<h1>welcome to node server </h1>`);
// })
app.use('/api/v1/portfolio', require('./routes/portfolioRoute.js'));

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,'./chatting/build/index.html'));
});
// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT,()=>{
    console.log(`server Running on PORT ${PORT}`);
});



// 