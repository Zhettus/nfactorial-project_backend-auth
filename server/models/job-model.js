const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const JobSchema = new Schema({
    title:{
        type:String,
        required: [true, 'Title field is required']
    }, 
    description:{
        type: String, 
        required: [true, 'Description field is required']
    }, 
    // isAvailable:{
    //     type: Boolean, 
    //     default: true
    // }
});


// JobSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });


const Job = mongoose.model('jobs', JobSchema)
module.exports = Job