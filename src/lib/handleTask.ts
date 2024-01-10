"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

const handleTask = async (form: FormData) => {
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
};

export default handleTask;
