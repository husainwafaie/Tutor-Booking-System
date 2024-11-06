import api from '../utils/api';

export const getAllStudents = async () => {
    try {
        const response = await api.get('/students');
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

export const createStudent = async (student) => {
    try {
        const response = await api.post('/students', student);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};
