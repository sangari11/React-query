import axios from "axios";

export default axios.create({
    // baseURL: "http://3.227.244.140:8089/",
    // baseURL: "http://3.227.244.140:8086/",
    baseURL: "http://3.227.244.140:8083/",
  headers: {
    "Content-type": "application/json"
  }
}); 