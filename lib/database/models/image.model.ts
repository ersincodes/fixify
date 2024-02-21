import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // URL type in Schema translates to string in TypeScript, assuming validation is handled elsewhere
  width?: number; // Optional property
  height?: number; // Optional property
  config?: object; // More specific type could be used if the shape of config is known
  transformationUrl?: string; // Optional, same rationale as secureUrl
  aspectRatio?: string; // Optional property
  color?: string; // Optional property
  prompt?: string; // Optional property
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming the reference will be handled as a string ID in TypeScript
  createdAt?: Date; // Default value is handled by the DB, but it's included here for completeness
  updatedAt?: Date; // Same rationale as createdAt
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
