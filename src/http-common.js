import axios from "axios";

export default axios.create({
  baseURL: "https://apirepository.damillano.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
