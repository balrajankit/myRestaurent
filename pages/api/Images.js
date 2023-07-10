import connectDb from "@/database/connect"
import Images from "@/modals/Images"



const ImageApi=async(req,resp)=>{
    try{
        await connectDb()
    if(req.method==="POST")
    {
        console.log("post"+JSON.stringify(req.body))
        const {ImageName,ImageUrl}=req.body
        console.log("name"+ImageName+"  ")
        if(ImageName!=='' && ImageUrl!=='')
        {
            console.log("created")
            const Image = await Images.create(req.body)
            const result = await Images.find({})
            resp.status(200).json(result)                
        }
        else{
            const result = await Images.find({})
            resp.status(200).json(result)  

        }
        
    }
    else{
        resp.status(200).json({ err: "method is not Post" })
    }
    }
    catch(error)
    {
        resp.status(200).json({ err: error })
    }

    
}

export default ImageApi