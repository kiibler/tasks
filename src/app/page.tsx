import prisma from "@/lib/prisma";
import App from "@/components/App";

export default async function Home() {
    const todoRecords = await prisma.todos.findMany({
        orderBy: {
            created_at: "desc",
        },
    });

    return (
        <main>
            <App todoRecords={todoRecords} />
        </main>
    );
}
