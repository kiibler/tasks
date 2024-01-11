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
            return <TaskCard key={task.id} task={task} />;
        }
    });

    return (
        <div className="mx-auto">
            <div className="my-10">
                <CreateTask />
            </div>
            <div className="rounded-lg border-2 p-4 shadow-xl md:p-8">
                <TaskTableHeader />
                <div className="grid auto-rows-fr gap-5">{tasks}</div>
            </div>
        </div>
    );
};

export default TaskTable;
