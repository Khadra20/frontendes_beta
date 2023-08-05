 

import { api } from "../../../Api/Config"
export const GetCleints=async()=>{
    return await api.get("/about")
}
export const Getbyid=async(id)=>{
    return await api.get(`/about/${id}`)
}
export const postcleint=async(data)=>{
    return await api.post("/about",data)
}
export const puclaient=async(id,data)=>{
    return await api.put(`/about/${id}`,data)
}
export const deletecleint=async(id)=>{
    return await api.delete(`/about/${id}`)
}