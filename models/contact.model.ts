import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  contest_id: { 
    type: Schema.Types.ObjectId, 
    ref: "Contest", 
    required: true 
  },
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phone: { type: String, required: false, trim: true },
  subject: { type: String, required: false, trim: true },
  message: { type: String, required: true, trim: true },
  image: { type: String, required: false, trim: true },
  address: { type: String, required: false, trim: true }, 
  gender: { type: String, required: false, trim: true },
  category: { type: [String], required: false, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);