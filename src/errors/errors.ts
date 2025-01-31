import { ApplicationError } from "./protocol";

function invalidFileFormatError(): ApplicationError {
  return {
    type: "invalidFileFormatError",
    message: "Tipo de arquivo inválido. Somente são aceitos arquivos .csv",
  };
}

function invalidCsvHeaderError(): ApplicationError {
  return {
    type: "invalidCsvHeaderError",
    message: "Cabeçalhos do csv inválidos.",
  };
}

function invalidCsvDataError(): ApplicationError {
  return {
    type: "invalidCsvDataError",
    message: "Dados do csv inválidos.",
  };
}

function invalidProductCodeError(): ApplicationError {
  return {
    type: "invalidProductCodeError",
    message: "Código de produto inexistente.",
  };
}

function invalidPriceError(): ApplicationError {
  return {
    type: "invalidPriceError",
    message: "Código de produto inexistente.",
  };
}

export {
  invalidFileFormatError,
  invalidCsvHeaderError,
  invalidCsvDataError,
  invalidProductCodeError,
  invalidPriceError,
};
