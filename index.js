const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({extended:true}))
app.use('/api/post', require('./routes/post.routes'))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://iwannabekoshka:iwannabekoshka@cluster0.fhjqe.mongodb.net/blog?retryWrites=true&w=majority', {
        })

        app.listen(PORT, () => {
            console.log('Listening on port:' + PORT)
        })
    } catch(error) {
        console.log(error)
    }
}
start()