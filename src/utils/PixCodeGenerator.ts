import { crc16ccitt } from 'crc';

export function pixCodeGenerator(value: string) {

  function generate(chavePix: string, nome: string, cidade: string, valor: string) {

    const payload = [
        "000201",
        "26450014BR.GOV.BCB.PIX",
        `01${chavePix.length.toString().padStart(2, '0')}${chavePix}`,
        "52040000",
        "5303986",
        `5405${valor}`,
        "5802BR",
        `59${nome.length.toString().padStart(2, '0')}${nome}`,
        `60${cidade.length.toString().padStart(2, '0')}${cidade}`,
        "62070503***",
        "6304"
    ];

    const pixSemCRC = payload.join("");
    const crc = crc16ccitt(pixSemCRC, 0xFFFF).toString(16).toUpperCase().padStart(4, '0');

    return pixSemCRC + crc;
  }

  const chave = "sara.melo.smf@gmail.com";
  const nome = "Sara Melo Frederico";
  const cidade = "SAO PAULO";
  const valor = value;

  const codigoPix = generate(chave, nome, cidade, valor);
  return codigoPix;

}




