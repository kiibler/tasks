"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export const toggleTodoState = async (id: string, state: boolean) => {
    await prisma.todos.update({
        data: {
            finished: state,
        },
        where: {
            id: id,
        },
    });

    revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
    await prisma.todos.delete({
        where: {
            id: id,
        },
    });

    revalidatePath("/");
};

export const createNewTodo = async (formData: FormData) => {
    const data = {
        todo: String(formData.get("todo")),
        tag: String(formData.get("tag")),
        due_date: null,
        finished: false,
    };

    await prisma.todos.create({
        data: data,
    });

    revalidatePath("/");
};
