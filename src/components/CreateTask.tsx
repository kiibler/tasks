"use client";

import { useFormState } from "react-dom";
import handleTask from "@/lib/handleTask";

const CreateTask = () => {
    const [state, formAction] = useFormState(handleTask, {
        task_name: "",
        course_name: "",
        due_date: "",
    });

    return (
        <form
            className="box-border flex gap-2 rounded-lg border-2 border-slate-600 bg-slate-800/90 p-4 py-6 shadow-md"
            action={formAction}
        >
            <input
                type="text"
                name="task_name"
                value={state?.task_name}
                className="rounded-lg px-2"
                placeholder="Tehtävä"
                required
            />
            <input
                type="text"
                name="course_name"
                value={state?.course_name}
                className="rounded-lg px-2"
                placeholder="Kurssi"
                required
            />
            <input
                type="datetime-local"
                name="due_date"
                value={state?.due_date}
                className="rounded-lg px-2"
            />
            <button type="submit" className="rounded-lg bg-white px-2">
                Luo Uusi
            </button>
        </form>
    );
};

export default CreateTask;
