import axios, {AxiosInstance} from "axios";

function httpClient(): AxiosInstance {
    const client = axios.create({
        baseURL: "http://localhost:3000",
    });

    client.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error),
    );

    return client;
}

export default httpClient;
