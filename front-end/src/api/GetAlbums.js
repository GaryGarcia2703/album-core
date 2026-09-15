import axios from "axios";
import API_URL from "./Config"

async function GetAlbums() {
    try {
        const res = await axios.get(`${API_URL}/albums`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export default GetAlbums