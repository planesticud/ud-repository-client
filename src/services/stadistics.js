import axios from "axios";
const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'
//const repositoryUrl = 'http://192.168.0.10:3005';

class StadisticsService {

    getStadistics() {
        const data = {}
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: data
        });
    }
    getStadisticsByid(id_obj) {
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: { id_obj }
        });
    }
    getStadisticsByAutor(autor) {
        return axios.get(`${repositoryUrl}/stadistics`, {
            params: { autor: autor }
        });
    }

    getStadisticsByFilter(data, autor) {
        return axios.get(`${repositoryUrl}/stadistics`, data, {
            params: { autor }
        });
    }

    addStadistics(data) {
        return axios.post(`${repositoryUrl}/stadistics`, data);
    }

    updateStadistics(data, id) {
        return axios.put(`${repositoryUrl}/stadistics`, data, {
            params: { id }
        })
    }

    deleteStadisticsById(id) {
        return axios.delete(`${repositoryUrl}/stadistics`, {
            params: { id }
        });
    }
}

export default new StadisticsService();
