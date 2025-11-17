import {v4 as uuid4} from "uuid";

export default function AssignmentsDao(db) {
    function findAssignmentsForCourse(courseId) {
        const {assignments} = db;
        return assignments.filter(assignment => assignment.course === courseId);
    }

    function createAssignment(assignment) {
        const newAssignment = {...assignment, _id: uuid4()};
        db.assignments = [...db.assignments, newAssignment];
        return newAssignment;
    }

    function deleteAssignment(assignmentId) {
        const {assignments} = db;
        db.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    }

    function updateAssignment(assignmentId, updateAssignment) {
        const {assignments} = db;
        const assignment = assignments.find(assignment => assignment._id === assignmentId);
        Object.assign(assignment, updateAssignment);
        return assignment;
    }

    return {findAssignmentsForCourse, createAssignment, updateAssignment, deleteAssignment};
}