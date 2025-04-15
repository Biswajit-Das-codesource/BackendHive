import { usermodel } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import { userValidator } from "../validation/user.validation.js";
import bcrypt from "bcrypt";
export async function handleRegister(req, res) {
  const parsed = userValidator.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "validation failed",
      errors: parsed.error.errors,
    });
  }

  const { username, email, password } = parsed.data;

  const isExist = await usermodel.findOne({ $or: [{ email }, { password }] });

  if (isExist) {
    return res.status(400).json({
      message: "Already Exist",
      success: false,
    });
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  await usermodel.create({
    username,
    password: hasedPassword,
    email,
  });

  res.status(201).json({
    message: "User Registration successfully",
    success: true,
  });
}

export async function handleLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  const user = await usermodel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid Email",
      success: false,
    });
  }
  
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid credentials",
      success: false,
    });
  }

  generateToken(user, res);
  res.status(200).json({
    message: `welcome back ${user.username}`,
    success: true,
    user,
  });
}

export async function handleLogout(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Error in Logout:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
}


export async function handleGetAllUser(req,res) {
    const allUser = await usermodel.find({})
    if(!allUser){
      return res.status(400).json({
        message:"Something went wrong",
        success:false
      })
    }

    res.status(200).json({
      message:"All user",
      success:true,
      users:allUser
    })
    
}