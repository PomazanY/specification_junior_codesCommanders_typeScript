import axios from "axios"

import requestDecorator from "./requestDecorator"

const backendInstance = axios.create({
    baseURL: "http://localhost:3333/auth"
})

export const registerUser = requestDecorator(async payload => {
    const {data} = await backendInstance.post("/all", payload);
    console.log(data);
    
    console.log("Ответ от сервера:", data);
    return data;
    
})

export default backendInstance;