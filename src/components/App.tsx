"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaskTable from "@/components/TaskTable";
import { Task } from "@prisma/client";
import { useState } from "react";

interface Props {
    taskRecords: Task[];
}

const App = ({ taskRecords }: Props) => {
    const [courseFitler, setCourseFilter] = useState("Kaikki Tehtävät");

    // get unique courses for sidebar filter buttons
    let courses: string[] = [];
    taskRecords.forEach((task) => {
        if (courses.indexOf(task.course_name) === -1) {
            courses.push(task.course_name);
        }
    });

    return (
        <>
            <Sidebar courses={courses} onCourseFilterChange={setCourseFilter} />
            <div className="flex-1">
                <Header />
                <div className="m-10 rounded-lg p-10 shadow-md">
                    <TaskTable
                        taskRecords={taskRecords}
                        courseFilter={courseFitler}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
