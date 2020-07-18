import Axios from "axios";
import jwtSectetKey from "./env";
import jwt from "jsonwebtoken";
const url = "https://nutrition-api-node.herokuapp.com";

export const adminLogin = (data) => {
  console.log(data);
  return Axios.post(`${url}/admin/LoginAdmin`, data);
};
export const SaveInLocalStorage = async (data) => {
  const stringiy = JSON.stringify(data);
  await localStorage.setItem("productAdmin", stringiy);
};
export const isLoggedIn = () => {
  if (localStorage.getItem("productAdmin")) {
    const adminString = localStorage.getItem("productAdmin");
    //console.log("user string", adminString);
    const adminJson = JSON.parse(adminString);
    //console.log("json admin", adminJson.token);
    //console.log("token", jwtSectetKey());
    const decode = jwt.verify(adminJson.token, jwtSectetKey());
    //console.log("decode", decode);
    //console.log("storeed id", adminJson.user._id);
    //console.log(decode.id, "==", adminJson.user._id);
    if (decode.id === adminJson.user._id) {
      //console.log("true");
      return adminJson;
    }
  }

  console.log("false");
  return false;
};
export const adminLogout = async () => {
  await localStorage.removeItem("productAdmin");
};
