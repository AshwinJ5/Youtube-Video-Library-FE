import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverurl";

//upload video api
export const uploadVideoAPI= async(video)=>{return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)}

//get all uploaded videos

export const getAllUploadedVideosAPI= async()=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}
//get a video
export const getVideoAPI= async(id)=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "")
}
//get a video
export const addVideoHistoryAPI= async(video)=>{
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}
//add video to history
export const getHistoryAPI= async()=>{
    return await commonAPI("GET", `${SERVER_URL}/history`,"")
}
//delete history
export const deleteHistoryAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`,{})
}


//delete video
export const deleteVideoAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`,{})
}

//add video to category
export const addCategoryAPI= async(category)=>{
    return await commonAPI("POST", `${SERVER_URL}/category`,category)
}

//get category
export const getAllCategoryAPI= async()=>{
    return await commonAPI("GET", `${SERVER_URL}/category`,"")
}

//delete category
export const deleteCategoryAPI= async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`,{})
}

//update video to category
export const updateCategoryAPI= async(id,categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`,categoryDetails)
}