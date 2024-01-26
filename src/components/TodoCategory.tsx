import { Todos } from "@prisma/client";
import Todo from "./Todo";

interface Props {
    category: string;
    todos: Todos[];
}

const TodoCategory = ({ category, todos }: Props) => {
    return (
        <div className="rounded-xl border dark:border-gray-700">
            <p className="rounded-t-xl bg-gray-100 p-2 dark:bg-gray-900">
                {category}
            </p>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodoCategory;
