const app = require("express")()
const PORT = 5000

require("./robot")

app.get("/", (req, res) => {
    res.send("HELLO SHOE")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})