import { api } from "../utils/requester";

const endPoints = {
    getAll: "/student",
    getAllPaginated: "/student/paginated",
};

async function getAll(signal) {
    return await api.get(endPoints.getAll, signal);
}

async function getAllPaginated(data, signal) {
    return await api.post(endPoints.getAllPaginated, data, signal);
}

async function createNew(data) {
    return await api.post(endPoints.getAll, data);
}

async function getById(id, signal) {
    return await api.get(endPoints.getAll + `/${id}`, signal);
}

async function getByIdPopulate(id, signal) {
    return await api.get(endPoints.getAll + `/${id}/populate`, signal);
}

async function editById(id, data) {
    return await api.put(endPoints.getAll + `/${id}`, data);
}

async function delById(id) {
    return await api.del(endPoints.getAll + `/${id}`);
}

export const studentService = {
    getAll,
    getAllPaginated,
    createNew,
    getById,
    editById,
    delById,
    getByIdPopulate,
};
