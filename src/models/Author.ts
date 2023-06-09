import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: {type: String},
    name: {
        type: String, 
        required: [true, "Author's name is required"]
    },
    country: {type: String},
},
{
    versionKey: false
});

const authors = mongoose.model("authors", authorSchema);

export { authors };