import axios from "axios";
const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'
//const repositoryUrl = 'http://192.168.0.9:3005';
class PublicarService {

    getPublicarConteo(dato) {
        const data = dato
        return axios.get(`${repositoryUrl}/publicar/contar`, { params: data });
    }

    getPublicar() {
        const data = {}
        return axios.get(`${repositoryUrl}/publicar`, { params: data });
    }

    getPublicarByid(idobj) {
        return axios.get(`${repositoryUrl}/publicar`, { params: { idobj } });
    }

    getPublicarByRevisor(revisor) {
        return axios.get(`${repositoryUrl}/publicar`, { params: { revisor: revisor } });
    }

    createPublicar(data) {
        return axios.post(`${repositoryUrl}/publicar`, data);
    }

    updatePublica(data, id) {
        return axios.put(`${repositoryUrl}/publicar`, data, { params: { id } });
    }

    deletePublicarById(id) {
        return axios.delete(`${repositoryUrl}/publicar`, { params: { id } });
    }
}

export default new PublicarService();