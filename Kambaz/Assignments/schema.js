import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
        _id: String,
        title: String,
        description: String,
        course: {type: String, ref: "CourseModel"},
        due: Date,
        available: Date,
        points: Number,
    },
    {collection: "assignments"}
);
export default assignmentSchema;