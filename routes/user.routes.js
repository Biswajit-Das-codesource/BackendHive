import express from "express"
import { handleGetAllUser, handleLogin, handleLogout, handleRegister } from "../controller/user.controller.js";

const routes = express.Router();
routes.route("/register").post(handleRegister)
routes.route("/login").post(handleLogin)
routes.route("/logout").get(handleLogout)
routes.route("/alluser").get(handleGetAllUser)
export default routes