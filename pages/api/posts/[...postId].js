import React from 'react'



const response=await fetch('https://jsonplaceholder.typicode.com/comments')
    const data=await response.json()
    var top=data.splice(0,20)
const POSTID = async(req,resp) => {
    
    const {postId}=req.query
    if(req.method==="DELETE")
    {
       
        const find=top.findIndex(item=>item.id===parseInt(postId))
        top.splice(find,1)
        
        resp.status(200).json(top)
    }
    

    else if(req.method==='GET')
    {
        resp.status(200).json(top)
    }
    else if(req.method==='POST')
    {
        const {value,id}=req.body
        
        const find=top.findIndex(item=>item.id===id)
        
        top[find].body=value
        top=[...top]
        resp.status(200).json(top)
    }
    else
    {
        resp.status(200).json(top)
    }
    
    
}

export default POSTID