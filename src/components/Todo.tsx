import { Todos } from "@prisma/client";
import { MdDeleteOutline } from "react-icons/md";
import { HTMLAttributes, useOptimistic, startTransition } from "react";

import { deleteTodo, toggleTodoState } from "@/lib/todoActions";

interface Props extends HTMLAttributes<HTMLDivElement> {
    todo: Todos;
}

const Todo = ({ todo }: Props) => {
    const [optimisticState, addOptimistic] = useOptimistic(todo.finished);

    return (
        <div className="flex items-center justify-between border-t p-2 hover:bg-gray-100">
            <div className="flex gap-4">
                <input
                    type="checkbox"
                    checked={optimisticState}
                    onChange={async () => {
                        startTransition(() => addOptimistic(!todo.finished));
                        await toggleTodoState(todo.id, !todo.finished);
                    }}
                />
                <p>{todo.task_name}</p>
            </div>
            <div className="flex gap-2">
                <p>
                    {todo.due_date &&
                        todo.due_date.toLocaleDateString("fi-FI", {
                            month: "short",
                            day: "numeric",
                        })}
                </p>
                <button
                    className="rounded-lg border bg-gray-100 p-1 hover:bg-gray-200"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <MdDeleteOutline />
                </button>
            </div>
        </div>
    );
};

export default Todo;
