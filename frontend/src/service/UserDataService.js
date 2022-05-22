import axios from 'axios'

const USER_API_URL = 'http://localhost:5000/'

class UserDataService {

    retrieveAllUsers() {

        return axios.get(`${USER_API_URL}/emp`);
    }

    retrieveUser(id) {

        return axios.get(`${USER_API_URL}/emp/${id}`);
    }

    deleteUser(id) {

        return axios.delete(`${USER_API_URL}/delete/${id}`);
    }

    updateUser(id, user) {

        return axios.put(`${USER_API_URL}/update/${id}`, user);
    }

    createUser(user) {

        return axios.post(`${USER_API_URL}/create`, user);
    }

}

export default new UserDataService()