import axios from "axios";

const token = localStorage.getItem("token");

// if (!token) {
//   console.warn("Токен отсутствует");
// } else {
  
// }

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    "Autorization": `Bearer ${token}`
  }
});

export default $axios;