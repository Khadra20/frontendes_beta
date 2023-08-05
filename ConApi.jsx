import { api } from "../../../api/Config";
export const GetAllcontect=async()=>{
return await api.get("/contect")
}
export const getbyid=async(id)=>{
   return await api.get(`/contect${id}`)
}
export const postcontect=async(data)=>{
    return await api.post("/contect",data)
}
export const updatecontect=async(id ,data)=>{
    return await api.put(`/contect/${id}`,data)
}
export const DeletContect=async(id)=>{
    return await api.delete(`/contect/${id}`)
}