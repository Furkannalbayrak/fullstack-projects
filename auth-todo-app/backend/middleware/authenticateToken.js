import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

function authenticateToken(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).send("Token yok");
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(403).send("Gecersiz token");
        }
        req.user = user;
        next();
    });
}

export default authenticateToken;