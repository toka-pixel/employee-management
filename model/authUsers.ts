import { Schema, model, models } from 'mongoose';

const authUsersSchema = new Schema({
    username: String,
    email: String,
    password: String
})

const AuthUsers = models?.authUsers || model('authUsers', authUsersSchema);

export default AuthUsers;