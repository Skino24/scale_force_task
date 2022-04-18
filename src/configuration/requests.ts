import axios from "axios";
import endpoint from "./config";

axios.defaults.baseURL = endpoint;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common["content-type"] = "application/json";

const request = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
};

export default request;