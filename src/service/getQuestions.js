import api from "../utils/apiClient";



export const getAllQuestions =()=>api().get("getAll")

export const getByIdQuestions =(id)=>api().get(`get/${id}`)


