import { api } from "../utils/requester";

const endPoints = {
    getAll: "/item",
};

async function getAll(signal) {
    return await api.get(endPoints.getAll, signal);
}

async function createNew(data) {
    return await api.post(endPoints.getAll, data);
}

async function getById(id, signal) {
    return await api.get(endPoints.getAll + `/${id}`, signal);
}

async function editById(id, data) {
    return await api.put(endPoints.getAll + `/${id}`, data);
}

async function delItemById(id) {
    return await api.del(endPoints.getAll + `/${id}`);
}

export const dataService = {
    getAll,
    createNew,
    getById,
    editById,
    delItemById,
};
