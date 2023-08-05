import {api}from '../../../Api/Config'

export const Gethomesit=async()=>{
    return await api.get("/homesit")
}
export const Getbyid=async(id)=>{
    return await api.get(`/homesit/${id}`)
}
export const POsthomesit=async(data)=>{
    return await api.post("/homesit",data)
}
export const Updatehomesit=async(id,data)=>{
    return await api.put(`/homesit/${id}`,data)
}
export const Delethomesit=async(id)=>{
    return await api.delete(`/homesit/${id}`)
}