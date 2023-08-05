

import { api } from "../../../Api/Config"
export const GetCleints=async()=>{
    return await api.get("/ourcleint")
}
export const Getbyid=async(id)=>{
    return await api.get(`/ourcleint/${id}`)
}
export const postcleint=async(data)=>{
    return await api.post("/ourcleint",data)
}
export const puclaient=async(id,data)=>{
    return await api.put(`/ourcleint/${id}`,data)
}
export const deletecleint=async(id)=>{
    return await api.delete(`/ourcleint/${id}`)
}