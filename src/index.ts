import express from 'express'

console.log("Starting express server ...")

const PORT = process.env.PORT || 3001;

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Express.TS server is up and running"
    })
})

app.listen(PORT, () => {
    console.log(`Express.TS server running at http://localhost:${PORT}`)
})
