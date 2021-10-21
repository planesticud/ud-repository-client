import axios from "axios";
const repositoryUrl = 'https://apirepository.planestic.udistrital.edu.co/api'

class UsersService {

    getUsers() {
        const data = {}
        return axios.get(`${repositoryUrl}/users`, { params: data })
    }
    deleteUsersById(id) {
        return axios.delete(`${repositoryUrl}/users`, { params: { id } })
    }

    getUsersByid(id) {
        return axios.get(`${repositoryUrl}/users`, { params: { id } })
    }
    getUsersByEmail(email) {
        return axios.get(`${repositoryUrl}/users`, { params: { email: email } })
    }
    createUser(data) {
        return axios.post(`${repositoryUrl}/users`, data)
    }
    updateUser(data, id) {
        return axios.put(`${repositoryUrl}/users`, data, { params: { id } })
    }
    
    getUserConteo(dato) {
        const data = dato
        return axios.get(`${repositoryUrl}/users/contar`, { params: data });
    }
}
   
export default new UsersService();