const {Router , json} = require('express')
const router = Router()

router.get('/', (req, res)=>{
    console.log('GET leads')
    res.status(200).send('GET leads')
})

router.get('/all', (req, res)=>{
    console.log('GET all leads')
    res.status(200).send('GET all leads')
})

router.post('/', (req, res, next)=>{
    let chunks = []

    req.on('data', (chunk)=>{
        chunks.push(chunk)
    })

    req.on('end', ()=>{
        const buffer = Buffer.concat(chunks)
        const jsonBody = JSON.parse(buffer.toString())
        req.body = jsonBody
        next()
    }),
    (req, res) => {
        console
    }
})

router.put('/', (req, res)=>{
    console.log('PUT leads')
    res.status(201).send('PUT leads')
})


router.delete('/', (req, res)=>{
    console.log('delete leads')
    res.status(201).send('delete leads')
})


module.exports = {leadRouter : router}