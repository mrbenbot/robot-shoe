const express = require("express")
const PORT = 5000
const app = express()

const { runSequence } = require("./robot")

app.use(express.json())

app.post("/sequence", async (req, res) => {
    try {
        const { sequence } = req.body
        await runSequence(sequence)
        res.json({ success: true, message: "Shoe sequence has been run!" })
    } catch (err) {
        console.log(err)
        res.json({ success: false, err })
    }
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})