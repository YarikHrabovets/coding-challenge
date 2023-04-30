import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api', async (req, res) => {
    const { country } = req.query

    await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            if(error.response){
                res.status(error.response.status).send(error.response.statusText)
            } else {
                res.status(500).send(error.message)
            }
        })
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})