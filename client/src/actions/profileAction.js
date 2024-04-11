import axios from 'axios'

export async function createProfile(form) {
    try {
        const response = await axios.post('http://localhost:5000/api/userInfo', form);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getProfile(id) {
    try {
        if (id) {
            const response = await axios.get(`http://localhost:5000/api/userInfo/${id}/profile`);
            return response.data
        }
        else { return }
    } catch (error) {
        console.log(error);
    }
}

export async function getProfiles() {
    try {
        const response = await axios.get(`http://localhost:5000/api/userInfo`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function updateProfile(form, userId) {
    try {
        const response = await axios.put(`http://localhost:5000/api/userInfo/${userId}/profile`, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error) {
        console.log(error);
    }
}