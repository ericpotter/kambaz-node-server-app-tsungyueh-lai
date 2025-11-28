import {v4 as uuid4} from "uuid";
import model from "./model.js";

export default function AssignmentsDao() {
    function findAssignmentsForCourse(courseId) {
        return model.find({course: courseId});
    }

    function createAssignment(assignment) {
        const newAssignment = {...assignment, _id: uuid4()};
        return model.create(newAssignment);
    }

    function deleteAssignment(assignmentId) {
        return model.deleteOne({_id: assignmentId});
    }

    function updateAssignment(assignmentId, updateAssignment) {
        return model.updateOne({_id: assignmentId}, updateAssignment);
    }

    return {findAssignmentsForCourse, createAssignment, updateAssignment, deleteAssignment};
}