import axios from "axios";
//"http://localhost:3000"
export default axios.create({
  baseURL: "https://rdigital.planestic.udistrital.edu.co/api",
  headers: {
    "Content-type": "application/json"
  }
});
