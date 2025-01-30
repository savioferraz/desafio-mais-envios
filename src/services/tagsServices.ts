import { emptyFile, fileNotFound, invalidData, tagNotFound } from "../errors/errors";
import * as XLSX from "xlsx";
import { TSpreadSheet } from "../model/spreadSheet";
import { jsonToTable } from "../utils/jsonToTable";

export class TagsServices {
  spreadSheet: TSpreadSheet[] = [];

  uploadTagTable = async (xlsxFile: any) => {
    if (!xlsxFile) throw fileNotFound();

    const workBook = XLSX.read(xlsxFile.buffer, { type: "buffer" });
    const sheet = workBook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);

    this.spreadSheet = jsonData as TSpreadSheet[];

    return this.spreadSheet;
  };

  getTagTable = async (format?: string) => {
    if (this.spreadSheet.length === 0) throw emptyFile();

    if (format === "table") {
      return jsonToTable(this.spreadSheet);
    }

    console.table(this.spreadSheet.map((row) => ({ ...row })));

    return this.spreadSheet;
  };

  updateTable = async (tagId: string, data: Partial<TSpreadSheet>) => {
    const isValid = this.validateData(data);
    if (!isValid) throw invalidData();

    const rowIndex = this.spreadSheet.findIndex((spreadSheet) => spreadSheet.Tag === tagId);
    if (rowIndex === -1) throw tagNotFound();

    this.spreadSheet[rowIndex] = Object.assign(this.spreadSheet[rowIndex], data);

    return this.spreadSheet[rowIndex];
  };

  deleteRow = async (tagId: string) => {
    const rowIndex = this.spreadSheet.findIndex((spreadSheet) => spreadSheet.Tag === tagId);
    if (rowIndex === -1) throw tagNotFound();

    const result = this.spreadSheet.splice(rowIndex, 1);

    return result[0];
  };

  private validateData = (data: Partial<TSpreadSheet>) => {
    const validKeys = ["Tag", "name", "status", "source", "price"];
    return Object.keys(data).every((key) => validKeys.includes(key));
  };
}
