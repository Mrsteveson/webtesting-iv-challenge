const router = require('express').Router();
const db = require('./doggos-model.js');

//Get Doggos. **Postman Tested: Working**
router.get('/', (req, res) => {
    db.get()
    .then(doggos => {
        res.status(200).json(doggos)
    })
    .catch(err => {
        res.status(500).json(err.message)
    });
});

//Add Doggo. **Postman Tested: Working**
router.post('/', (req, res) => {
    const newDoggo = req.body;

    if(!newDoggo.name || !newDoggo.status) {
        res.status(404).json({ message: 'Please provide a name and status for the doggo.'})
    } else {
        db.add(newDoggo)
        .then(doggo => {
            res.status(201).json(doggo)
        })
        .catch(err => {
            res.status(500).json(err.message)
        });
    };
});

//Delete Doggo. **Postman Tested: Working**
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
    .then(doggo => {
        if(doggo > 0) {
            res.status(200).json({ message: 'Doggo successfully removed.'})
        } else {
            res.status(404).json({ message: 'The specified doggo does not exist.'})
        }
    })
    .catch(err => {
        res.status(500).json(err.message)
    });
});

module.exports = router;