"use client";

import { useState } from "react";

interface TaskProps {
    taskName: string;
    courseName: string;
}

const TaskCard = ({ taskName, courseName }: TaskProps) => {
    const [done, setDone] = useState(false);

    return (
        <div
            className={`${
                done ? "border-green-300" : "border-red-300"
            } border-4 rounded-lg bg-white p-4`}
        >
            <h3>{taskName}</h3>
            <h3>{courseName}</h3>
            <input type="checkbox" onChange={() => setDone(!done)} />
        </div>
    );
};

export default TaskCard;
