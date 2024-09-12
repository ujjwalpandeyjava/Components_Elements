import axios from "axios";

const ax = axios.create({
    baseURL: `https://example.com`,
    timeout: 30000, // Will be aborted after 30s
});
const apiEndPoints = {
    COMPANION_CHAT(url = '/web') {
        return {
            fetchAll: () => ax.get(url),
            resolveQuery: (query) => ax.get(url, { params: query }),
            fetchById: (id) => ax.get(url + "/" + id),
            create: (newRecord) => ax.post(url, newRecord, {}),
            delete: (id) => ax.delete(url + id),
        }
    },
    OTHER_WORK(url = 'addPath/') {
        return {
            fetchAll: () => ax.get(url),
            create: (newRecord) => ax.post(url, newRecord),
            delete: (id) => ax.delete(url + id),
            update: (id, updatedRecord) => ax.put(url + "/" + id, updatedRecord),
            patch: (id, updatedRecord) => ax.patch(url + "/" + id, updatedRecord),
        }
    }
}

// Axios Interceptors
ax.interceptors.request.use(
    config => {
        // get data from session/localStorage/cookie
        let defaultData = {};
        config.params = { ...defaultData, ...config.params };
        return config;
    },
    (error) => {
        console.error("Error in interceptor: ", error.message);
        return Promise.reject(error);
    }
);
ax.interceptors.response.use(
    response => {
        console.log({
            URL_base: response.baseURL,
            URL_Full: `${response.baseURL}${response.url}`,
            response: response,
            params: response.config.params,
            data: response.data,
            status: response.status,
            statusText: response.statusText
        });
        // Check the status and redirect it as per the status to specific page 
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default apiEndPoints;
export { ax };
