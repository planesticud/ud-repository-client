import axios from "axios";
const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'

class FilesService {

    getFiles() {
        const data = {}
        return axios.get(`${repositoryUrl}/files/all`, { params: data })
    }
    deleteFilesById(id) {
        return axios.delete(`${repositoryUrl}/files`, { params: { id } })
    }

    getFilesByid(id) {
        return axios.get(`${repositoryUrl}/files`, { params: { id } })
    }
    getFilesByEmail(email) {
        return axios.get(`${repositoryUrl}/files/email`, { params: { email: email } })
    }
    getFilesByState(state) {
        return axios.get(`${repositoryUrl}/files/state`, { params: { state: state } })
    }
    createFile(data) {
        return axios.post(`${repositoryUrl}/files`, data)
    }

    updateFiles(data, id) {
        return axios.put(`${repositoryUrl}/files`, data, { params: { id } })
    }

    upload(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return axios.post(`${repositoryUrl}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        })
    }
}

export default new FilesService();