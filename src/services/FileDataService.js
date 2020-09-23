import http from "../http-common";

class FileDataService {
    getAll() {
      return http.get("/files");
    }
  
    get(id) {
      return http.get(`/general?id=${id}`);
    }
  
    create(data) {
      return http.post("/files", data);
    }
  
    update(id, data) {
      return http.put(`/general?id=${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/general?id=${id}`);
    }
  
    deleteAll() {
      return http.delete(`/general`);
    }
  
    findByTitle(title) {
      return http.get(`/general?title=${title}`);
    }
  }
  
  export default new FileDataService();