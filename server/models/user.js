import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: true,
    },
},
    { timestamps: true }
);

export default mongoose.model('User', userSchema);