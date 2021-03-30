import mongoose from 'mongoose';


const reqString = {
  type: String,
  required: true
};

const userSchema = mongoose.Schema({
  firstName: reqString,
  lastName: reqString,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: reqString,
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;


// const adminSchema = new Schema({
//   date: {
//   type: Date,
//   default: Date.now
// }
// });