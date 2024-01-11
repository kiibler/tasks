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
        <div className="mx-auto bg-white">
            <div className="my-10">
                <CreateTask />
            </div>
            <div className="p-4 sm:rounded-lg sm:border-2 sm:shadow-xl md:p-8">
                <TaskTableHeader />
                <div className="grid auto-rows-fr gap-5">{tasks}</div>
            </div>
        </div>
    );
};

export default TaskTable;
