const express = require("express");
const pastelSchema = require("../models/pastels");

const router = express.Router();

// get pastels

router.post("/pastels", (req, res) => {
    console.log(req.body, "asd")
    const pastel = pastelSchema(req.body);
    pastel
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/pastels", (req, res) => {
    pastelSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/pastel/:id", (req, res) => {
    const { id } = req.params;
    pastelSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;