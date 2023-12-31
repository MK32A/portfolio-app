import api from "./api";

const apiPath = import.meta.env.VITE_API_PATH;
const resource = apiPath + "/user_profile";

export const allUsers = () => api.get(resource);

export const userProfile = (user) => api.put(resource, user);