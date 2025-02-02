import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { TagsServices } from "../services/tagsServices";
import { ITagsController } from "./types";

/**
 * Classe controladora da rota `/tags`. Responsável por receber as requisições HTTP, chamar os métodos apropriados e devolver uma resposta.
 */
export class TagController implements ITagsController {
  tagsServices = new TagsServices();

  uploadTagTable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const xlsxFile = req.file;

      const result = await this.tagsServices.uploadTagTable(xlsxFile?.buffer);

      res
        .status(httpStatus.CREATED)
        .send({ message: `Planilha com ${result.length} etiquetas carregada com sucesso`, result });
    } catch (e) {
      next(e);
    }
  };

  getTagTable = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const format = req.query.format as string;
      const result = await this.tagsServices.getTagTable(format);

      res.status(httpStatus.OK).send(result);
    } catch (e) {
      next(e);
    }
  };

  updateTable = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { tagId } = req.params;
      const { data } = req.body;

      const result = await this.tagsServices.updateTable(tagId, data);

      res.status(httpStatus.OK).send({ message: `Etiqueta de id: ${tagId} atualizada com sucesso!`, result });
    } catch (e) {
      next(e);
    }
  };

  deleteTableRow = async (req: Request, res: Response, next: NextFunction) => {
    const { tagId } = req.params;

    await this.tagsServices.deleteRow(tagId);

    res.status(httpStatus.OK).send({ message: `Etiqueta de id: ${tagId} deletada com sucesso` });
    try {
    } catch (e) {
      next(e);
    }
  };
}
