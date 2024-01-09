import prisma from "@/lib/prisma";
import TaskCard from "@/components/TaskCard";

const TaskTable = async () => {
    const tasks = await prisma.task.findMany();

    return (
        <div className="grid auto-rows-fr gap-5">
            {tasks.map((task) => {
                return (
                    <TaskCard
                        key={task.id}
                        task_name={task.task_name}
                        course_name={task.course_name}
                        due_date={task.due_date}
                        finished={task.finished}
                    />
                );
            })}
        </div>
    );
};

export default TaskTable;
