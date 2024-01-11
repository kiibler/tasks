"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaskTable from "@/components/TaskTable";
import { Task } from "@prisma/client";
import { useState, useEffect } from "react";

interface Props {
    taskRecords: Task[];
}

const App = ({ taskRecords }: Props) => {
    const [courseFitler, setCourseFilter] = useState("Kaikki Tehtävät");
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);

        window.innerWidth < 1280
            ? setIsSidebarVisible(false)
            : setIsSidebarVisible(true);
    };

    useEffect(() => {
        // on component mount (initial render)
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // on component remount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // get unique courses for sidebar filter buttons
    let courses: string[] = [];
    taskRecords.forEach((task) => {
        if (courses.indexOf(task.course_name) === -1) {
            courses.push(task.course_name);
        }
    });

    return (
        <main>
            <Header
                screenWidth={screenWidth}
                isSidebarVisible={isSidebarVisible}
                setIsSidebarVisible={setIsSidebarVisible}
            />
            <div className="flex">
                <Sidebar
                    courses={courses}
                    courseFilter={courseFitler}
                    onCourseFilterChange={setCourseFilter}
                    isSidebarVisible={isSidebarVisible}
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
