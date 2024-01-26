import { Todos } from "@prisma/client";
import Todo from "./Todo";

interface Props {
    category: string;
    todos: Todos[];
}

const TodoCategory = ({ category, todos }: Props) => {
    return (
        <div className="rounded-xl border">
            <p className="rounded-t-lg bg-gray-100 p-2">{category}</p>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodoCategory;
