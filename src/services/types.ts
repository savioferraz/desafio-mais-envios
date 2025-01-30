import { TSpreadSheet } from "../model/spreadSheet";

/**
 * Interface da classe TagsServices
 */
export interface ITagsServices {
  /**
   * Array de objetos JSON salvo em memória com os dados da planilha a ser manipulada
   */
  spreadSheet: TSpreadSheet[];

  /**
   * Carrega os dados da planilha XLSX para a memória
   * @param {any} xlsxFile  Arquivo XLSX
   * @returns {Promise<TSpreadSheet[]>}  Array de objetos JSON
   */
  uploadTagTable(xlsxFile: any): Promise<TSpreadSheet[]>;

  /**
   * Retorna a planilha de etiquetas em formato JSON ou HTML
   * @param {string} format  Formato de retorno
   * @returns {Promise<string | TSpreadSheet[]>}  Planilha de etiquetas
   */
  getTagTable(format?: string): Promise<string | TSpreadSheet[]>;

  /**
   * Atualiza um ou mais dados de uma linha da planilha, através do ID da etiqueta
   * @param {string} tagId  ID da etiqueta
   * @param {Partial<TSpreadSheet>} data  Dados a serem atualizados
   * @returns {Promise<TSpreadSheet>}  Linha atualizada
   */
  updateTable(tagId: string, data: Partial<TSpreadSheet>): Promise<TSpreadSheet>;

  /**
   * Deleta uma linha da planilha, através do ID da etiqueta
   * @param {string} tagId  ID da etiqueta
   * @returns {Promise<TSpreadSheet>}  Linha deletada
   */
  deleteRow(tagId: string): Promise<TSpreadSheet>;
}
