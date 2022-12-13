import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';

// const uri = process.env.MONGODB_URI
// const options:any = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {

  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  // if (!global._mongoClientPromise) {
  //   client = new MongoClient(uri, options)
  //   global._mongoClientPromise = client.connect()

  // }
  // clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }


// export default clientPromise;
const connectMongo = async () => {
  try{

      const { connection }  = await mongoose.connect(process.env.MONGODB_URI)

      if(connection.readyState == 1){
          
      }

  }catch(errors){
      return Promise.reject(errors)
  }
}

export default connectMongo;