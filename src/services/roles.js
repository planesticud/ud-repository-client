import axios from "axios";
const repositoryUrl = 'https://rdigital.planestic.udistrital.edu.co/api'

class RolesService {

    getRoles() {
        const data = {}
        return axios.get(`${repositoryUrl}/roles`, { params: data })
    }
    deleteRolesById(id) {
        return axios.delete(`${repositoryUrl}/roles`, { params: { id } })
    }

    getRolesByid(id) {
        return axios.get(`${repositoryUrl}/roles`, { params: { id } })
    }
    getRolesByName(name) {
        return axios.get(`${repositoryUrl}/roles`, { params: { name: name } })
    }
    createRole(data) {
        return axios.post(`${repositoryUrl}/roles`, data)
    }
    updateRole(data, id) {
        return axios.put(`${repositoryUrl}/roles`, data, { params: { id } })
    }
    
    getRoleConteo(dato) {
        const data = dato
        return axios.get(`${repositoryUrl}/roles/contar`, { params: data });
    }
}
   
export default new RolesService();