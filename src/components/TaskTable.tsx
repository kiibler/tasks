import TaskCard from "@/components/TaskCard";
import TaskTableHeader from "./TaskTableHeader";
import CreateTask from "./CreateTask";
import { Task } from "@prisma/client";

interface Props {
    taskRecords: Task[];
    courseFilter: string;
}

const TaskTable = ({ taskRecords, courseFilter }: Props) => {
    const tasks = taskRecords.map((task) => {
        if (
            courseFilter === "Kaikki Tehtävät" ||
            courseFilter === task.course_name
        ) {
            return (
                <TaskCard
                    key={task.id}
                    task_name={task.task_name}
                    course_name={task.course_name}
                    due_date={task.due_date}
                    finished={task.finished}
                />
            );
        }
    });

    return (
        <>
            <div className="mb-10">
                <CreateTask />
            </div>
            <TaskTableHeader />
            <div className="grid auto-rows-fr gap-5">{tasks}</div>
        </>
    );
};

export default TaskTable;
