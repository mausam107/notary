const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const revenueSchema = new Schema({
  UserID:{
    type:String,
    required:true
  },  
  amount: {
    type:Number,
    required: true
  },
  dataRecieved: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Revenue',revenueSchema);