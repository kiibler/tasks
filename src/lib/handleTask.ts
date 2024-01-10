"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

type createTaskForm = {
    task_name: string;
    course_name: string;
    due_date: string;
};

const handleTask = async (_: createTaskForm, form: FormData) => {
    await prisma.task.create({
        data: {
            task_name: String(form.get("task_name")),
            course_name: String(form.get("course_name")),
            due_date: form.get("due_date")
                ? new Date(form.get("due_date") as string)
                : null,
            finished: false,
        },
    });

    revalidatePath("/");

    // return cleared form state
    return {
        task_name: "",
        course_name: "",
        due_date: "",
    };
};

export default handleTask;
