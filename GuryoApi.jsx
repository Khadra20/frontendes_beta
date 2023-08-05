import {api}from '../../../Api/Config'

export const GetGuryo=async()=>{
    return await api.get("/Guryo")
}
export const Getbyid=async(id)=>{
    return await api.get(`/Guryo/${id}`)
}
export const POstguryo=async(data)=>{
    return await api.post("/Guryo",data)
}
export const UpdateGuryo=async(id,data)=>{
    return await api.put(`/Guryo/${id}`,data)
}
export const DeletGuryo=async(id)=>{
    return await api.delete(`/Guryo/${id}`)
}