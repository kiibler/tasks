import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";

export default async function Home() {
    const tasks = await prisma.task.findMany();

    return (
        <main>
            {tasks.map((task) => {
                return <TaskCard key={task.id} taskName={task.task_name} courseName={task.course_name!} />
            })}
        </main>
    );
}
