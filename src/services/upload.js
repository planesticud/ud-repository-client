import axios from "axios";
const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'
//const repositoryUrl = 'http://192.168.0.9:3005'
class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(`${repositoryUrl}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles() {
    return axios.get(`${repositoryUrl}/files/general`);
  }
}
export default new UploadFilesService();