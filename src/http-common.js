import axios from "axios";
//"http://localhost:3000"
export default axios.create({
  baseURL: "https://apirepository.damillano.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
