import axios from "axios";

const instance = axios.created({
  baseURL: "..." //THE API (cloud function) URL
});

export default instance;
