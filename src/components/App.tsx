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
        <main>
            <Header />
            <div className="flex">
                <Sidebar
                    courses={courses}
                    courseFilter={courseFitler}
                    onCourseFilterChange={setCourseFilter}
                />
                <TaskTable
                    taskRecords={taskRecords}
                    courseFilter={courseFitler}
                />
            </div>
        </main>
    );
};

export default App;
