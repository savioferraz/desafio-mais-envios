import { TSpreadSheet } from "../model/spreadSheet";

/**
 * Converte um array de objetos JSON em uma tabela HTML
 * @param {TSpreadSheet} data  Array de objetos JSON
 * @returns {string}  Tabela HTML
 */
export const jsonToTable = (data: TSpreadSheet[]): string => {
  return `
    <html>
      <head>
        <title>Tabela de Etiquetas</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Lista de Etiquetas</h1>
        <table>
          <thead>
            <tr>
              ${Object.keys(data[0])
                .map((key) => `<th>${key}</th>`)
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (row) => `
              <tr>
                ${Object.values(row)
                  .map((value) => `<td>${value}</td>`)
                  .join("")}
              </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </body>
      </html>`;
};
