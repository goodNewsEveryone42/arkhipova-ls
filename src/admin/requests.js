import axios from "axios";

const token = localStorage.getItem("tokenLoft");

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    "Autorization": `Bearer ${token}`
  }
});

export default $axios;