"use server";

import prisma from "./prisma";
import { Task } from "@prisma/client";

type NewTask = Pick<Task, "task_name" | "course_name" | "due_date" | "finished">;

const handleTask = async (form: FormData) => {
    const task: NewTask = {
        task_name: String(form.get("task_name")),
        course_name: String(form.get("course_name")),
        due_date: form.get("due_date")
            ? new Date(form.get("due_date") as string)
            : null,
        finished: false,
    };

    await prisma.task.create({ data: task });
};

export default handleTask;
