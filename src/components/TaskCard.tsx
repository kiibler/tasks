"use client";

import { useState } from "react";
import getTime from "@/lib/getTime";
import toggleTaskState from "@/lib/toggleTaskState";
import { Task } from "@prisma/client";

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    const [done, setDone] = useState(task.finished);

    return (
        <div
            className={`${
                done ? "border-green-300" : "border-red-300"
            } grid grid-cols-4 items-center break-words rounded-lg border-2 bg-white py-6 hover:bg-gray-100/50 hover:shadow-md md:grid-cols-5`}
        >
            <div className="col-span-2 grid grid-cols-subgrid items-center gap-4 md:col-span-3">
                <input
                    type="checkbox"
                    className="ml-4 justify-self-start"
                    checked={done}
                    onChange={() => {
                        setDone(!done);
                        toggleTaskState(task.id, !done);
                    }}
                />
                <h3>{task.task_name}</h3>
            </div>
            <h3>{task.course_name}</h3>
            <h3>{`Due: ${task.due_date ? getTime(task.due_date) : "-"}`}</h3>
        </div>
    );
};

export default TaskCard;
