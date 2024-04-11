import axios from 'axios'

export async function signUp(form) {
    try {
        const response = await axios.post('http://localhost:5000/api/users', form);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function signIn(form) {
    try {
        const response = await axios.post('http://localhost:5000/api/users/auth', form);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function signOut() {
    try {
        const res = await axios.post('http://localhost:5000/api/users/logout');
    } catch (error) {
        console.log(error);
    }
}