const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Form } = require('../models/form');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Form.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});



/*router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Form.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});*/

router.get('/:email', (req, res) => {

    Form.findOne({ email: req.params.email },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return  res.send(user);
        }
    );
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Form.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var resume = new Form({
       
    firstname:  req.body.firstname ,
    lastname:  req.body.lastname,
    email:  req.body.email,
    mobile:  req.body.mobile,
    gender:  req.body.gender,
    sslcname:  req.body.sslcname,
    sslcyear:  req.body.sslcyear,
    sslcper:  req.body.sslcper,
    hscname: req.body.hscname,
    hscyear: req.body.hscyear,
    hscper: req.body.hscper,
    colname: req.body.colname,
    coldeg: req.body.coldeg,
    colyear: req.body.colyear,
    colper: req.body.colper,
    company: req.body.company,
    start: req.body.stat,
    end: req.body.end,
    desc: req.body.desc,

    });
    resume.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var resume = {
        firstname:  req.body.firstname ,
    lastname:  req.body.lastname,
    email:  req.body.email,
    mobile:  req.body.mobile,
    gender:  req.body.gender,
    sslcname:  req.body.sslcname,
    sslcyear:  req.body.sslcyear,
    sslcper:  req.body.sslcper,
    hscname: req.body.hscname,
    hscyear: req.body.hscyear,
    hscper: req.body.hscper,
    colname: req.body.colname,
    coldeg: req.body.coldeg,
    colyear: req.body.colyear,
    colper: req.body.colper,
    company: req.body.company,
    start: req.body.stat,
    end: req.body.end,
    desc: req.body.desc,
    };
    Form.findByIdAndUpdate(req.params.id, { $set: resume }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Form.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;