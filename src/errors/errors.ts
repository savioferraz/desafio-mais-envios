import { ApplicationError } from "./protocol";

function fileNotFound(): ApplicationError {
  return {
    type: "fileNotFound",
    message: "Arquivo não enviado. Deve ser enviado um arquivo do tipo .xlsx",
  };
}

function emptyFile(): ApplicationError {
  return {
    type: "emptyFile",
    message: "Não há tabelas para serem exibidas",
  };
}

export { fileNotFound, emptyFile };
