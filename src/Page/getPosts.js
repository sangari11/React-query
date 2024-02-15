// import api from '../../api/http-common';


export const getPosts = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json();
};


// import api from "../api/http-common";


// export const getPosts = async ()=>{
//     const response = await api.get("users/all")
//     console.log(response)
//     return response.json();
// };