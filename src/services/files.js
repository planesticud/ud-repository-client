import axios from "axios";
const repositoryUrl = 'https://apirepository.damillano.com/api'

class FilesService {

    getFiles(){
        const data = {}
        return axios.get(`${repositoryUrl}/files`, { params: data })
    }
    deleteFilesById(id){
        return axios.delete(`${repositoryUrl}/files`, { params: {id} })
    }

    getFilesByid(id){
        return axios.get(`${repositoryUrl}/files`, { params: {id} })
    }
    getFilesByEmail(email){
        return axios.get(`${repositoryUrl}/files`, { params: {email:email} })
    }
     createFile(data){
        return axios.post(`${repositoryUrl}/files`, data)
    }

    updateFiles(data, id){
        return axios.put(`${repositoryUrl}/files`, data,  { params: { id } })
    }

    upload(file) {
        let formData = new FormData();  
        formData.append("file", file);
        return axios.post(`${repositoryUrl}/upload`, formData, { })
      }
}

export default new FilesService();