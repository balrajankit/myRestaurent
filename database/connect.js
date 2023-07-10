import mongoose from 'mongoose'

const connectDb=async()=>
{
    mongoose.connect(process.env.dbURL)
}

export default connectDb