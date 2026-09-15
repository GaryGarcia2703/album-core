import axios from "axios"
import API_URL from "./Config"

async function GetAlbumDetails(id) {
    try {
        const res = await axios.get(`${API_URL}/albums/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export default GetAlbumDetails