const express = require('express');
const router = express.Router();
const Patient = require('../model/Patient');

router.get('/', async (req, res) => {
    try {
        debugger;
        const patients = await Patient.find();
        if (patients.length === 0) {
            return res.status(404).json({ message: 'No patients found' });
        }
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching patients', error });
    }
});

module.exports = router;
