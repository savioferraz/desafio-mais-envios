import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { TagsServices } from "../services/tagsServices";

export class TagController {
  tagsServices = new TagsServices();

  uploadTagTable = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const xlsxFile = req.file;

      const result = await this.tagsServices.uploadTagTable(xlsxFile?.buffer);

      res.status(httpStatus.CREATED).send(result);
    } catch (e) {
      next(e);
    }
  };

  getTagTable = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.tagsServices.getTagTable();

      res.status(httpStatus.OK).send(result);
    } catch (e) {
      next(e);
    }
  };
}
