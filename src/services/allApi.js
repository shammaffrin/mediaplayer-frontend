import { commonApi} from "./commonApi"
import {serverUrl} from "./serverUrl"

//api to add video
export const addVideoApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

//api to get all videos
export const getVideoApi =async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to remove a video
export const removeVideo = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

//api to add video to history
export const addhistory =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

//api to get all video from history
export const getAllVideohistory =async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

//api to delete history
export const deletehistory =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category
export const addcat =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//api to get category
export const getcat =async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
}

//api to delete category
export const delcat=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to update category
export const updatecat =async(categoryid ,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${categoryid}`,reqBody)
}