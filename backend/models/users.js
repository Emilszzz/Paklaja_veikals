var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  user: String,
  name: String,
  password: String,
 email:String,
 address: String,
 country: String,

 });

mongoose.model('users', UserSchema);