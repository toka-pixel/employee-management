import { Schema, models ,model } from "mongoose";
import { User } from "../types/user";

const userSchema= new Schema({
    name:String,
    avatar:String,
    email:String,
    salary:String,
    date:String,
    status:String
})

const Users=models.user || model('user', userSchema);
export default Users;