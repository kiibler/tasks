import App from "@/components/App";
import prisma from "@/lib/prisma";

export default async function Home() {
    const taskRecords = await prisma.task.findMany();

    return (
        <main className="flex">
            <App taskRecords={taskRecords} />
        </main>
    );
}
