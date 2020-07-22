import axios from "axios";

const token = localStorage.getItem("tokenLoft");

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
});

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (error.response.status === 401) {
      return $axios
        .post(`/refreshToken?token=${localStorage.getItem("tokenLoft")}`)
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("tokenLoft", token);
          return axios(originalRequest);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    }
  }
);

export default $axios;
