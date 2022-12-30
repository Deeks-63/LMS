import mongoose from "mongoose"
import crypto from "crypto"
import { v1 as uuidv1 } from "uuid"
const { ObjectId } = mongoose.Schema;
const schema = mongoose.Schema
const userSchema = new schema({
    name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    idno: {
        type: Number,
        required: true,
    },
    department: {
        type: ObjectId,
        ref: "Department",
        required: true
    },

    // TODO: comeback here
    encry_password: {
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Number,
        default: 1
    },
    leaves: {
        type: Array,
        default: []
    }
}, { timestamps: true });


userSchema.virtual("password")
    .set(function(password) {
        this._password = password
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function() {
        return this._password
    })


userSchema.methods = {
    authenticate: function(plainPassword) {
        return this.securePassword(plainPassword) === this.encry_password
    },
    securePassword: function(plainPassword) {
        if (!plainPassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest("hex")
        } catch (error) {
            return ""
        }
    }
}

const user = mongoose.model("User", userSchema);
export default user;
