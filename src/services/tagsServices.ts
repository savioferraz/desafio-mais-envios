import { invalidFileFormatError } from "../errors/errors";
import * as XLSX from "xlsx";

export class TagsServices {
  spreadSheet: any[] = [];

  uploadTagTable = async (xlsxFile: any) => {
    if (!xlsxFile) throw invalidFileFormatError();

    const workBook = XLSX.read(xlsxFile.buffer, { type: "buffer" });
    const sheet = workBook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets[sheet]);

    console.log(jsonData);

    this.spreadSheet = jsonData;
    console.log(this.spreadSheet);

    return this.spreadSheet;
  };
}
