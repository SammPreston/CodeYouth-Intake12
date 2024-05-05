const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("Hello World")

    
})
app.listen(3001, () => {
    console.log("Server done run on port 3001")
})
