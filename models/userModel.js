const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:false,
    },
    mobile_number:{
        type:String,
        required:true,
        unique:true,
    },                                   
    Educational_Qualification:{
        type:String,
        required:true,
        enum:['8th Standard','10th Standard','12th Standard','Undergraduate','Postgraduate'],
        default:'8th Standard',
    },
    otp:{
        type: String,
        required: false,
        default: 0,
      },
    emailVerified:{
        type:String,
        required:false,
        enum:["Yes","No"],
        default:"No",
      }
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;
    
