import axios from "axios"
const API_URL = "http://localhost:3000/api"

async function GetAlbumDetails(id) {
    try {
        const res = await axios.get(`${API_URL}/albums/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export default GetAlbumDetails