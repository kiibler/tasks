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
            } grid grid-cols-3 break-all rounded-lg border-2 hover:bg-gray-100/50 hover:shadow-md md:grid-cols-5 md:py-6`}
        >
            <div className="col-span-2 my-auto grid grid-flow-col grid-cols-subgrid gap-4 md:col-span-3">
                <input
                    type="checkbox"
                    className="ml-2 max-w-fit md:ml-4"
                    checked={done}
                    onChange={() => {
                        setDone(!done);
                        toggleTaskState(task.id, !done);
                    }}
                />
                <h3>{task.task_name}</h3>
            </div>
            <h3 className="hidden md:block">{task.course_name}</h3>
            <h3 className="my-auto">{`Due: ${
                task.due_date ? getTime(task.due_date) : "-"
            }`}</h3>
        </div>
    );
};

export default TaskCard;
