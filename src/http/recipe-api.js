import api from "./api";

const apiPath = import.meta.env.VITE_API_PATH
const resource = apiPath + "/recipes";

export const allRecipes = () => api.get(resource);

export const showRecipe = () => api.get(resource);

export const createRecipe = (recipe) => api.post(resource, recipe);

export const updateRecipe = (id, recipe) => api.put(`${resource}/${id}`, recipe);

export const removeRecipe = id => api.delete(`${resource}/${id}`);

export const completeRecipe = (id, recipe) => api.put(`${resource}/${id}/complete`, recipe);
