"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export const toggleTaskState = async (id: string, state: boolean) => {
    const res = await prisma.task.update({
        where: {
            id: id,
        },
        data: {
            finished: state,
        },
    });

    revalidatePath("/");
};
