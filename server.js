const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers =  {
    '21 savage': {
        'age': 29,
        'birthName': 'Seyaah',
        'birthLocation': 'England, London'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 69,
        'birthName': 'Uknown Uknowerson',
        'birthLocation': 'Unknownsville, Unmurica'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rappersName = req.params.name.toLowerCase()
    if(rappers[rappersName]) {
        res.json(rappers[rappersName])
    }else {
        res.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) 