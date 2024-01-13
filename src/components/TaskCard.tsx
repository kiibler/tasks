"use client";

import { useState } from "react";
import { getTime } from "@/lib/getTime";
import { toggleTaskState } from "@/lib/toggleTaskState";
import { Task } from "@prisma/client";

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const [done, setDone] = useState(task.finished);

    return (
        <div
            className={`${
                done
                    ? "border-green-600 shadow-green-300 sm:border-green-300 sm:hover:border-green-600"
                    : "border-red-600 shadow-red-300 sm:border-red-300 sm:hover:border-red-600"
            } flex min-h-14 break-all rounded-lg border-2 py-2 shadow-lg sm:break-keep md:py-8`}
        >
            <input
                type="checkbox"
                className="mx-2 max-w-10 flex-auto"
                checked={done}
                onChange={() => {
                    setDone(!done);
                    toggleTaskState(task.id, !done);
                }}
            />
            <h3 className="flex-1">{task.task_name}</h3>
            <h3 className="hidden md:inline md:flex-1">{task.course_name}</h3>
            <h3 className="flex-1">{`Due: ${
                task.due_date ? getTime(task.due_date) : "-"
            }`}</h3>
        </div>
    );
};

export default TaskCard;
