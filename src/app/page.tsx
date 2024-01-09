import CreateTask from "@/components/create-task";
import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";

export default async function Home() {
    const tasks = await prisma.task.findMany();

    return (
        <>
            <CreateTask />
            {tasks.map((task) => {
                return (
                    <TaskCard
                        key={task.id}
                        task_name={task.task_name}
                        course_name={task.course_name!}
                        due_date={task.due_date}
                        finished={task.finished}
                    />
                );
            })}
        </>
    );
}
