import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema;
const schema = mongoose.Schema

const leaveSchema = new schema({
    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    idno: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
    },
    comments: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Denied"],
        default: "Pending"
    },
    approved: {
        type: Boolean,
        default: false
    },
    denied: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

const leave = mongoose.model("Leave", leaveSchema);
export default leave;
