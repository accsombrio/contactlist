var express = require('express');
var router = express.Router();
const Contact = require('../models/contacts');
router.get('/contacts', function(req, res, next){
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

router.post('/contact', function(req, res, next){
    console.log(req.body.first_name);
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number
    });

    newContact.save(function(err, contact){
        if(err){
            res.json({msg: 'failed'});
        }else {
            res.json({msg:'success'});
        }
    })
});

router.delete('/contacts/:ids',function(req, res, next){
    Contact.remove({_id: req.params.ids}, function(err, result){
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;