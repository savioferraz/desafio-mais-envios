import { Router } from "express";
import { TagController } from "../controllers/tagsController";
import { upload } from "../config/multerConfig";

const tagRouter = Router();
const tagController = new TagController();

tagRouter.route("/").post(upload.single("file"), tagController.uploadTagTable);

export default tagRouter;
