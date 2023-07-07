import axios from "axios";
const repositoryUrl = 'https://rdigital.planestic.udistrital.edu.co/api'
//const repositoryUrl = 'http://192.168.0.10:3005';

class statisticsService {

    getstatistics() {
        const data = {}
        return axios.get(`${repositoryUrl}/statistics`, {
            params: data
        });
    }
    getstatisticsByid(id_obj) {
        return axios.get(`${repositoryUrl}/statistics`, {
            params: { id_obj }
        });
    }
    getstatisticsByAutor(autor) {
        return axios.get(`${repositoryUrl}/statistics`, {
            params: { autor: autor }
        });
    }

    getstatisticsByFilter(data, autor) {
        return axios.get(`${repositoryUrl}/statistics`, data, {
            params: { autor }
        });
    }

    addstatistics(data) {
        return axios.post(`${repositoryUrl}/statistics`, data);
    }

    updatestatistics(data, id) {
        return axios.put(`${repositoryUrl}/statistics`, data, {
            params: { id }
        })
    }

    deletestatisticsById(id) {
        return axios.delete(`${repositoryUrl}/statistics`, {
            params: { id }
        });
    }
}

export default new statisticsService();
