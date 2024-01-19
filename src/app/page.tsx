import App from "@/components/App";
import prisma from "@/lib/prisma";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();

    if (!session) return redirect("/api/auth/signin");

    const taskRecords = await prisma.task.findMany({
        where: {
            user_email: session.user?.email ?? "",
        },
        orderBy: {
            task_name: "desc",
        },
    });

    return <App taskRecords={taskRecords} />;
}
