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
                        taskName={task.task_name}
                        courseName={task.course_name!}
                        due_date={task.due_date}
                        is_done={task.finished}
                    />
                );
            })}
        </>
    );
}
