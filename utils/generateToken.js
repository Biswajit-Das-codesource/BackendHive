import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});
export function generateToken(user, res) {
  const token = jwt.sign(
    {
      userId: user._id,
      name: user.username,
      email: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "30d" },
    
  );

  return res.cookie("token", token,{httpOnly:true});
}
