"use client";

import handleTask from "@/lib/handleTask";
import { useState } from "react";

const CreateTask = () => {
    const [formState, setFormState] = useState({
        task_name: "",
        course_name: "",
        due_date: "",
    });

    return (
        <form
            className="hidden rounded-lg border-2 border-slate-600 bg-slate-800/90 p-4 shadow-md md:justify-start md:gap-8 lg:flex"
            action={(form) => {
                handleTask(form);
                setFormState({ task_name: "", course_name: "", due_date: "" });
            }}
        >
            <input
                type="text"
                name="task_name"
                value={formState?.task_name}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        task_name: e.currentTarget.value,
                    })
                }
                className="rounded-lg p-2"
                placeholder="Tehtävä"
                required
            />
            <input
                type="text"
                name="course_name"
                value={formState?.course_name}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        course_name: e.currentTarget.value,
                    })
                }
                className="rounded-lg p-2"
                placeholder="Kurssi"
                required
            />
            <input
                type="datetime-local"
                name="due_date"
                value={formState?.due_date}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        due_date: e.currentTarget.value,
                    })
                }
                className="rounded-lg p-2"
            />
            <button type="submit" className="rounded-lg bg-white p-2">
                Luo Uusi
            </button>
        </form>
    );
};

export default CreateTask;
