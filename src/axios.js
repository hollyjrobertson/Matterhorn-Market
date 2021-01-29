import axios from "axios";

const instance = axios.create({
    // API URL (cloud function)
    // Local baseURL
    // baseURL: 'http://localhost:5001/matterhorn-site/us-central1/api' 

    // Production baseURL
    baseURL: 'https://us-central1-matterhorn-site.cloudfunctions.net/api'
});

export default instance;