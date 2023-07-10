const mongoose = require('mongoose');
// resp.status(200).json({dat: "dat"})
import connectDb from '@/database/connect';
import User from '@/modals/Schema';




const Sql =async(req,resp) => {

    try
    {
        console.log("connection")
        await connectDb()
        console.log("connected")
        // console.log("creating schema")
        // const user = await User.create(req.body)
        console.log(req.method)
        
        if (req.method === 'GET') {
            const allUsers=await User.find({})
            resp.status(200).json({ allUsers })
        }
        else if(req.method==="DELETE")
        {
            const id=req.query.sql
            console.log("id"+JSON.stringify(req.query))
            try{
                const result = await User.deleteOne({ _id: id })
                console.log("delted"+result)
                const allUser = await User.find({})
                console.log("userd" + allUser)
                resp.status(200).json({ allUser })
            }
            catch(err)
            {
                console.log(JSON.stringify(err))
                resp.status(200).json({ err })
            }
            
        }
        else if(req.method==="POST")
        {
            console.log("post")
            const user = await User.create(req.body)
            const allUsers=await User.find({})
            resp.status(200).json({ allUsers })
        }
        else if(req.method=='PUT')
        {
            const {id,userName,email,password}=req.body
            
            const find=await User.findOneAndUpdate({_id:id},{$set:{userName:userName,password:password,email:email}})
            
            const allUsers=await User.find({})
            resp.status(200).json({ allUsers })
        }
    }
    catch (err) {
        resp.json({ err })
    }
    
}

export default Sql