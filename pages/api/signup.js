
const Db = require('mssql/msnodesqlv8');
import {sql,poolConnected} from '@/database/connect'






const SignUp=async(req,resp)=>{
   const {userName,email,password}=req.body
   
   
    // Wait for the connection to be established
  try {
    await poolConnected;
    const request=new sql.Request()
    const result=await request.query('select * from emp')
    return resp.status(200).json({result:result}) 
  } catch (err) {
    console.error('SQL query error', err);
    throw err;
  }
}

export default SignUp