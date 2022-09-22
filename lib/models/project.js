import mongoose from "mongoose";

const { Schema } = mongoose;

const pageSchema = new Schema({
  page: {
    type: String,
    required: "Page name is required",
  },
  image: {
    type: String,
  },
  content: {
    type: [String],
  },
});

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: "Project name is required",
    },
    description: {
      type: String,
      required: "Description is required",
    },
    url: {
      type: String,
    },
    image: {
      type: String,
    },
    tech: {
      type: [String],
    },
    frontend: {
      type: [String],
    },
    backend: {
      type: [String],
    },
    selected: {
      type: Boolean,
    },
    features: [pageSchema],
  },
  { timestamps: true }
);

export default mongoose.models["Project"]
  ? mongoose.model("Project")
  : mongoose.model("Project", projectSchema);
