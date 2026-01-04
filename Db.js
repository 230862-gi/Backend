import mongoose from "mongoose";
const mongo_URL="mongodb+srv://230862_db_user:Cricket123@cluster0.gwvrwpp.mongodb.net/?appName=Cluster0"

const mongoConnection =()=>{
    try {
        const connection = mongoose.connect(mongo_URL)
        console.log("Database Connected")
    } catch (error) {
        // console.log("error in db")
        console.log(error)     
    }
}

export default mongoConnection;