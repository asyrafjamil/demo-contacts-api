var mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: 1,
        maxlength: 100
    },
    age:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: 1,
    },
    number:{
        type: String,
        unique: 1,
    },
    height:{
        type:String,
        required: true
    }
});


module.exports=mongoose.model('User',userSchema);