"use client";

import { useState } from "react";
import getTime from "@/lib/getTime";
import { Task } from "@prisma/client";

type Props = Pick<Task, "task_name" | "course_name" | "due_date" | "finished">;

const TaskCard = ({ task_name, course_name, due_date, finished }: Props) => {
    const [done, setDone] = useState(finished);

    return (
        <div
            className={`${
                done ? "border-green-300" : "border-red-300"
            } grid grid-cols-5 items-center rounded-lg border-2 bg-white py-6 hover:bg-gray-100/50 hover:shadow-md`}
        >
            <div className="col-span-3 grid grid-cols-subgrid items-center">
                <input
                    type="checkbox"
                    className="ml-4 justify-self-start"
                    checked={done}
                    onChange={() => setDone(!done)}
                />
                <h3>{task_name}</h3>
            </div>
            <h3>{course_name}</h3>
            <h3>{`Due: ${due_date ? getTime(due_date) : "-"}`}</h3>
        </div>
    );
};

export default TaskCard;
