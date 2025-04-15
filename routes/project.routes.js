import express from "express"
import { handleCreateProject } from "../controller/project.controller.js";

const routes = express.Router();

routes.route("/create").post(handleCreateProject)
// routes.route("/login").post(handleLogin)
// routes.route("/logout").get(handleLogout)
export default routes