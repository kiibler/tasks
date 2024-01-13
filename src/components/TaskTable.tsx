import TaskCard from "@/components/TaskCard";
import TaskTableHeader from "./TaskTableHeader";
import Dialog from "./Dialog";
import CreateTask from "./CreateTask";
import { Task } from "@prisma/client";
import { useRef } from "react";

interface Props {
    taskRecords: Task[];
    courseFilter: string;
    screenWidth: number;
}

const TaskTable = ({ taskRecords, courseFilter, screenWidth }: Props) => {
    const tasks = taskRecords.map((task) => {
        if (
            courseFilter === "Kaikki Tehtävät" ||
            courseFilter === task.course_name
        ) {
            return <TaskCard key={task.id} task={task} />;
        }
    });

    // used to control dialog element
    const ref = useRef<HTMLDialogElement>(null);
    const NewTaskComponent =
        screenWidth > 1280 ? (
            <CreateTask
                className="flex gap-2 rounded-2xl border-2 border-slate-900 bg-slate-800/90 p-4 shadow-xl"
                dialogRef={ref}
            />
        ) : (
            <Dialog
                className="rounded-lg bg-slate-800 p-4 shadow-xl"
                dialogRef={ref}
            >
                <CreateTask dialogRef={ref} className="mt-4 grid gap-4" />
            </Dialog>
        );

    return (
        <div className="mx-auto bg-white">
            <div className="my-10">{NewTaskComponent}</div>
            <div className="p-4 sm:rounded-lg sm:border-2 sm:shadow-xl md:p-8">
                <TaskTableHeader />
                <div className="grid auto-rows-fr gap-5">{tasks}</div>
            </div>
        </div>
    );
};

export default TaskTable;
