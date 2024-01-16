const jwt=require("jsonwebtoken");
const jwtSecret=process.env.SECRET_KEY_JWT;

function setUser(user){
     
    return jwt.sign({
        name:user.name,
        email:user.email,
        Educational_Qualification:user.Educational_Qualification,   
    },jwtSecret); 
};

function getUser(token){
    if(!token) {
        return null;
    }
    else{
      return jwt.verify(token,jwtSecret);
    }
}

module.exports={setUser,getUser};