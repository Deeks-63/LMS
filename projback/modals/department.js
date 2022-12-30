import mongoose from "mongoose"

const schema = mongoose.Schema

const departmentSchema = new schema({
    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true,
        unique: true
    }
}, { timestamps: true });



const department = mongoose.model("Department", departmentSchema);
export default department;