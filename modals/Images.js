import { Schema, model, models } from "mongoose"


const ImageSchema=new Schema({
    ImageName:{
        type: String,
        required:true
    },
    ImageUrl:{
        type: String,
        require: true
    }
})


const Images=models.Images || model('Images',ImageSchema)

export default Images