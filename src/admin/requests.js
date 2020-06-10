import axios from "axios";

const token = localStorage.getItem("token");

if (!token) {
  console.warn("Токен отсутствует");
}

const $axios = axios.create({
  baseUrl: "https://webdev-api.loftschool.com",
  headers: {
    "Autorization": `Bearer ${token}`
  }
});

export default $axios;