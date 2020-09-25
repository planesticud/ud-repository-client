import http from "../http-common";

class FileDataService {
    getAll() {
      return http.get("/files/general");
    }
  
    get(id) {
      return http.get(`/files/general?id=${id}`);
    }
  
    create(data) {
      return http.post("/files/general", data);
    }
  
    update(id, data) {
      return http.put(`/files/general?id=${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/files/general?id=${id}`);
    }
  
    deleteAll() {
      return http.delete(`/files/general`);
    }
  
    findByTitle(title) {
      return http.get(`/files/general?title=${title}`);
    }
  }
  
  export default new FileDataService();