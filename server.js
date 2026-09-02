require('dotenv').config()
const express = require("express")
const app = express()
app.use(express.json())


console.log(process.env.JWT_SECRET);


const pool = require("./config/db")
const userRoute = require("./routes/userRoute")
const depenseRoute = require("./routes/depenseRoute")


app.get("/", (req, res) => {
    res.send("API FONCTIONNE")
})


app.use("/api/users", userRoute)
app.use("/api", depenseRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
    
})