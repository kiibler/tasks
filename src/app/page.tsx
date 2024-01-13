import App from "@/components/App";
import prisma from "@/lib/prisma";

export default async function Home() {
    const taskRecords = await prisma.task.findMany({
        orderBy: {
            task_name: "desc",
        },
    });

    return <App taskRecords={taskRecords} />;
}
