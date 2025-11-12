import mongoose from "mongoose";

const GeneratedResumeSchema = new mongoose.Schema(
  {
    // user reference (optional for now)
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   default: null,
    // },

    // store the generated LaTeX content
    latexContent: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const resumemodel = mongoose.model("GeneratedResume", GeneratedResumeSchema);


export default resumemodel;