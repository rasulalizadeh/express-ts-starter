import express from 'express'

console.log("Starting express server ...")

const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Express.TS server is up and running ...."
    })
})

app.listen(port, () => {
    console.log(`Express.TS server running at http://localhost:${port}`)
  })