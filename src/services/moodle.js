import axios from "axios";
const moodleUrl = 'http://192.168.0.8'
const token = '237606d8371ff1511323eaca7bb0f7bc'
const wsfunction = 'core_user_create_users'
class MoodleService {
    createUser(data) {
        return axios.get(`${moodleUrl}/webservice/rest/server.php`, { params: data })
    }
    mapDataUser(data){
        return {
            'wstoken': token,
            'wsfunction':wsfunction,
            'moodlewsrestformat':'json',
            'users[0][username]':data.userName,  
            'users[0][password]':data.password,
            'users[0][firstname]':data.firstName,
            'users[0][lastname]':data.lastName,
            'users[0][email]':data.email
        }
    }
    getUsers() {
        const data = {
            'wstoken': token,
            'wsfunction':'core_user_get_users',
            'moodlewsrestformat':'json',
            'criteria[1][key]':'email',
            'criteria[1][value]':'%%'
        }
        return axios.get(`${moodleUrl}/webservice/rest/server.php`, { params: data })
    }
    getUsersByEmail(email) {
        const data = {
            'wstoken': token,
            'wsfunction':'core_user_get_users',
            'moodlewsrestformat':'json',
            'criteria[1][key]':'email',
            'criteria[1][value]':email
        }
        return axios.get(`${moodleUrl}/webservice/rest/server.php`, { params: data })
    }
    deleteUsersById(id) {
        const data = {
            'wstoken': token,
            'wsfunction':'core_user_delete_users',
            'moodlewsrestformat':'json',
            'userids[0]':id
        }
        return axios.get(`${moodleUrl}/webservice/rest/server.php`, { params: data })
    }

    updateUsers(data) {
        const body = {
            'wstoken': token,
            'wsfunction':'core_user_update_users',
            'moodlewsrestformat':'json',
            'users[0][id]':data.id,
            'users[0][username]':data.userName,  
            'users[0][password]':data.password,
            'users[0][firstname]':data.firstName,
            'users[0][lastname]':data.lastName,
            'users[0][email]':data.email
        }
        return axios.get(`${moodleUrl}/webservice/rest/server.php`, { params: body })
    }
}

export default new MoodleService();