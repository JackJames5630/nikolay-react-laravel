import axios from 'axios'

export async function sendEmail(data) {
        try {
            const response = await axios.post('http://localhost:5000/api/sendEmail', data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
