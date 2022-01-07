import api from "../utils/apiClient";

export const postQuestions =()=>api().get("create")

export const postAnswer =()=>api().get("add")