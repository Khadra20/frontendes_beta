
import { api } from "../../../api/Config"
export const Getservice=async()=>{
    return await api.get("/service")
}
export const Getbyid=async(id)=>{
    return await api.get(`/service/${id}`)
}
export const postservice=async(data)=>{
    return await api.post("/service",data)
}
export const putservice=async(id,data)=>{
    return await api.put(`/service/${id}`,data)
}
export const delelservice=async(id)=>{
    return await api.delete(`/service/${id}`)
}