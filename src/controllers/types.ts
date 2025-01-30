import { NextFunction, Request, Response } from "express";

/**
 * Interface da classe TagsController.
 */
export interface ITagsController {
  /**
   * Controlador da rota **POST** `/tags`, para upload de planilha de etiquetas.
   */
  uploadTagTable(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   * Controlador da rota **GET** `/tags`, para retornar a planilha de etiquetas.
   */
  getTagTable(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   * Controlador da rota **PUT** `/tags/:tagId`, para atualizar uma linha da planilha de etiquetas.
   */
  updateTable(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   * Controlador da rota **DELETE** `/tags/:tagId`, para deletar uma linha da planilha de etiquetas.
   */
  deleteTableRow(req: Request, res: Response, next: NextFunction): Promise<void>;
}
