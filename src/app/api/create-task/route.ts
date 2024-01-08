import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    const data = await req.json();

    const res = await prisma.task.create({
        data: data,
    });

    return NextResponse.json(res);
}
