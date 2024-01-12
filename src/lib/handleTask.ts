"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

const handleTask = async (prevState: any, form: FormData) => {
    try {
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
        return { message: `Added task ${form.get("task_name")}` };
    } catch (e) {
        return { message: "Failed to add task" };
    }
};

export default handleTask;
