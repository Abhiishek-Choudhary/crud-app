import mongoose from "mongoose";

const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qa9hiqa-shard-00-00.197k4ju.mongodb.net:27017,ac-qa9hiqa-shard-00-01.197k4ju.mongodb.net:27017,ac-qa9hiqa-shard-00-02.197k4ju.mongodb.net:27017/?ssl=true&replicaSet=atlas-13lu4v-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster5`;
    try{
      await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
      console.log(`Database Connected Sucessfully`);
      
    }
    catch(error){
        console.log(`Error while Connecting with the database`,error);
    }
}

export default Connection;