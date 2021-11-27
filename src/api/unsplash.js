import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID VBoEDrf1khZcr16FCdAF90Mf9M5GW6KGi7FOmsJD5gw'
      }
});

