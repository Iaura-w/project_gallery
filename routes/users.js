const express = require('express');
const router = express.Router();

const users = [
    {
        imie: "jan",
        nazwisko: "kowal",
        email: "jan.k@gmail.com",
        wiek: 23
    },
    {
        imie: "adam",
        nazwisko: "b",
        email: "adam.b@gmail.com",
        wiek: 25
    },
]
router.get('/', (req, res) => {
    res.send(users)
});

router.post('/', (req, res) => {
    console.log(req.body);
    const user = req.body
    users.push(user)
    res.send(users)
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const userName = users.find((u) => u.imie === id)
    res.send(userName)
});

console.log("router users gotowy");

module.exports = router;
