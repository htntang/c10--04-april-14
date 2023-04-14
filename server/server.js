import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 5051

const moves = [
    "rock",
    "paper",
    "scissors"
]

app.get('/rps', (req, res) => {
    const choice=Math.floor(Math.random()*3)
    const move = moves[choice]
    res.send(move)
})

app.listen(port, ()=>{
    console.log('listening on port', port)
})