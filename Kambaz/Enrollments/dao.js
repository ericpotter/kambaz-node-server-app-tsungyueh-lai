import { v4 as uuid4 } from "uuid";

export default function EnrollmentsDao(db) {
    function enrollUserInCourse(userId, courseId) {
        const { enrollments } = db;
        enrollments.push({ _id: uuid4(), user: userId, course: courseId });
    }

    function unenrollUserFromCourse(userId, courseId) {
        const { enrollments } = db;
        db.enrollments = enrollments.filter(
            (enrollment) =>
                !(enrollment.user === userId && enrollment.course === courseId)
        );
    }

    return { enrollUserInCourse, unenrollUserFromCourse };
}