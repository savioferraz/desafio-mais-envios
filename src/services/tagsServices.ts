import { emptyFile, fileNotFound } from "../errors/errors";
import * as XLSX from "xlsx";

export class TagsServices {
  spreadSheet: any[] = [];

  uploadTagTable = async (xlsxFile: any) => {
    if (!xlsxFile) throw fileNotFound();

    const workBook = XLSX.read(xlsxFile.buffer, { type: "buffer" });
    const sheet = workBook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);

    this.spreadSheet = jsonData;

    return this.spreadSheet;
  };

  getTagTable = async () => {
    if (this.spreadSheet.length === 0) throw emptyFile();

    return this.spreadSheet;
  };
}
