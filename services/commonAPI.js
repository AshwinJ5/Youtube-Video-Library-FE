import axios from 'axios'

export const commonAPI= async(httpMethod,url,reqBody)=>{
    let reqConfiguration={
        method:httpMethod,
        url,
        headers:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }

    return await axios(reqConfiguration).then((res)=>{return res}).catch((err)=>{return err})
}