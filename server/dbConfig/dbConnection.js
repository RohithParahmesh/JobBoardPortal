import mongoose from 'mongoose'

const dbConnection = async()=>{
    try{
        const dbConnection = await mongoose.connect("mongodb+srv://rohithp:rohithp@cluster0.jtbonvk.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database connected")
    }

    catch(error)
    {
        console.log("DB Error: "+ error)
    }
}

export default dbConnection
