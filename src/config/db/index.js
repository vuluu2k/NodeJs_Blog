const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully');
    } catch (e) {
        console.log('Connect failed: ' + e.message);
    }
}
module.exports = { connect };
