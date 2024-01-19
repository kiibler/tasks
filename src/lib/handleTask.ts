"use server";

import { auth } from "./auth";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export const handleTask = async (prevState: any, form: FormData) => {
    const session = await auth();

    if (!session) return { message: "Unauthenticated" };

    try {
        await prisma.task.create({
            data: {
                task_name: String(form.get("task_name")),
                course_name: String(form.get("course_name")),
                due_date: form.get("due_date")
                    ? new Date(form.get("due_date") as string)
                    : null,
                finished: false,
                user_email: session?.user?.email ?? "",
            },
        });

        revalidatePath("/");
        return { message: `Added task ${form.get("task_name")}` };
    } catch (e) {
        return { message: "Failed to add task" };
    }
};
