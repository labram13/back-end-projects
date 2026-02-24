const express = require('express')
const router = express.Router()
const Test = require('../../models/testModel')

router.get('/', (req, res) => {
    res.json({status: "entered /test"})
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const {name, email} = req.body

    const newTest = await Test.create({name, email})

    res.status(200).json({status:"success", newTest})
})


module.exports = router