import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
}, { minimize: false })
//{minimize:false} = when there is an empty object(cartData) when creating a user, it will not get created since it is empty, we use this to prevent that and create the cartData as well

const userModel = mongoose.models.userModel || mongoose.model('user', userSchema)


export default userModel