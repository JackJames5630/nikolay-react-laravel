import axios from 'axios'

export async function createPublication(form) {
    try {
        const res = await axios.post('http://localhost:5000/api/publications', form, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getPublication() {
    try {
        const res = await axios.get('http://localhost:5000/api/publications')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function likePublication(id) {
    try {
        const res = await axios.put(`http://localhost:5000/api/publications/${id}/like`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export async function unlikePublication(id) {
    try {
        const res = await axios.put(`http://localhost:5000/api/publications/${id}/unlike`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export async function viewPublication(id) {
    try {
        const res = await axios.put(`http://localhost:5000/api/publications/${id}/view`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
export async function favouritesPublication(id) {
    try {
        const res = await axios.put(`http://localhost:5000/api/publications/${id}/favourites`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}