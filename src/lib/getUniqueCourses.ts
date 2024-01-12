import { Task } from "@prisma/client";

const getUniqueCourses = (taskRecords: Task[]): string[] => {
    const uniqueCourses: string[] = [];
    taskRecords.forEach((task) => {
        if (uniqueCourses.indexOf(task.course_name) === -1) {
            uniqueCourses.push(task.course_name);
        }
    });

    return uniqueCourses;
};

export default getUniqueCourses;
