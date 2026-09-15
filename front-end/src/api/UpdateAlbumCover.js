import axios from "axios";

import API_URL from "./Config"

async function UpdateAlbumCover(albumId, coverUrl) {
      try {
        const res = await axios.patch(`${API_URL}/albums/${albumId}/cover`, {
            coverUrl,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default UpdateAlbumCover;   