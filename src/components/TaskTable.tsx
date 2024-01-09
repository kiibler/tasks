import prisma from "@/lib/prisma";
import TaskCard from "@/components/TaskCard";
import TaskTableHeader from "./TaskTableHeader";
import CreateTask from "./CreateTask";

const TaskTable = async () => {
    const tasks = await prisma.task.findMany();

    return (
        <>
            <div className="mb-10">
                <CreateTask />
            </div>
            <TaskTableHeader />
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
        </>
    );
};

export default TaskTable;
