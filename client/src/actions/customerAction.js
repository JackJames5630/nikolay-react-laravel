import axios from 'axios'

export async function createCustomer(form) {
    try {
        const res = await axios.post('http://localhost:5000/api/reviews', form, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCustomer() {
    try {
        const res = await axios.get('http://localhost:5000/api/reviews')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}