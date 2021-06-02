const mongoose = require('mongoose');

var Form = mongoose.model('Form', {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    mobile: { type: String },
    gender: { type: String },
    sslcname: { type: String },
    sslcyear: { type: String },
    sslcper: { type: String },
    hscname: { type: String },
    hscyear: { type: String },
    hscper: { type: String },
    colname: { type: String },
    coldeg: { type: String },
    colyear: { type: String },
    colper: { type: String },
    company: { type: String },
    start: { type: String },
    end: { type: String },
    desc: { type: String },

    
    
    
    
    
},'resumeform');

module.exports = { Form };