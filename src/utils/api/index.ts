import axios from "axios";

const internAPI = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Get Request using axios
 * @param url 
 * @param params 
 * @returns T
 */
export function get<T = any>(url: string, params?: any) {
    return internAPI.get<T>(url, { params });
};

/**
 * Post Request using axios
 * @param url 
 * @param params 
 * @returns T
 */
export function post<T = any>(url: string, data?: any) {
    return internAPI.post<T>(url, data);
};

/**
 * Put Request using axios
 * @param url 
 * @param params 
 * @returns T
 */
export function put<T = any>(url: string, data?: any) {
    return internAPI.put<T>(url, data);
};