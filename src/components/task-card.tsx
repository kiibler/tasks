"use client";

import { useState } from "react";
import getTime from "@/lib/getTime";

interface TaskProps {
    taskName: string;
    courseName: string;
    due_date: Date | null;
    is_done: boolean;
}

const TaskCard = ({ taskName, courseName, due_date, is_done }: TaskProps) => {
    const [done, setDone] = useState(is_done);

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
            <h3>{taskName}</h3>
            <div className="ml-auto flex justify-around gap-4">
                <h3>{courseName}</h3>
                <h3>{`Due: ${
                    due_date ? getTime(due_date.toISOString()) : "-"
                }`}</h3>
            </div>
        </div>
    );
};

export default TaskCard;
