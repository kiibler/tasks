"use client";

import handleTask from "@/lib/handleTask";

const CreateTask = () => {
    return (
        <form
            className="bg-slate-500 box-border border-2 border-slate-600 p-4 flex gap-2 rounded-lg my-4 py-6"
            onSubmit={(e) => handleTask(e)}
        >
            <input
                type="text"
                name="task_name"
                className="rounded-lg px-2"
                placeholder="Tehtävä"
                required
            />
            <input
                type="text"
                name="course_name"
                className="rounded-lg px-2"
                placeholder="Kurssi"
                required
            />
            <input
                type="datetime-local"
                name="due_date"
                className="rounded-lg px-2"
            />
            <button type="submit" className="bg-white rounded-lg px-2">
                Luo Uusi
            </button>
        </form>
    );
};

export default CreateTask;
