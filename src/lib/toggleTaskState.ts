"use server";

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
};
