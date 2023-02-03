const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {connection} = require("./db")
const routes = require("./routes")

const app = express()

app.use(morgan("dev"))
app.use(express.json({ limit : "30mb"})) // We are going to send images which can be larger sizes
app.use(express.urlencoded({ extended : true}))
app.use(cors())
app.use("/api", routes)

const PORT = process.env.PORT || 5000

connection.once("open", ()=>{
    app.listen(PORT, ()=>{
        console.log(`Server listen to the port ${PORT}`)
    })
})

connection.set("useFindAndModify", false) // Hide deprecated warnings
