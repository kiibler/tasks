"use client";

import { useState } from "react";
import getTime from "@/lib/getTime";
import { Task } from "@prisma/client";

type Props = Pick<Task, "task_name" | "course_name" | "due_date" | "finished">;

const TaskCard = ({ task_name, course_name, due_date, finished}: Props) => {
    const [done, setDone] = useState(finished);

    return (
        <div
            className={`${
                done ? "border-green-300" : "border-red-300"
            } bg-white box-border border-2 p-4 flex gap-2 rounded-lg my-4 py-6`}
        >
            <input
                type="checkbox"
                checked={done}
                onChange={() => setDone(!done)}
            />
            <h3>{task_name}</h3>
            <div className="ml-auto flex justify-around gap-4">
                <h3>{course_name}</h3>
                <h3>{`Due: ${
                    due_date ? getTime(due_date) : "-"
                }`}</h3>
            </div>
        </div>
    );
};

export default TaskCard;
