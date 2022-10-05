import CryptoJS from "crypto-js";

const key = 'Hola Mundo';

export function encryptData(data) {
    return CryptoJS.AES.encrypt(data.toString(), key).toString();
}
  
  //Descriptamos la informacion
export function decryptedData(data) {
    return CryptoJS.AES.decrypt(data || "", key)?.toString(CryptoJS.enc.Utf8);
}

export function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}
  