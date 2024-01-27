import { Todos } from "@prisma/client";
import Todo from "./Todo";
import { HiMiniHashtag } from "react-icons/hi2";

interface Props {
    tag: string;
    todos: Todos[];
}

const TodoGroup = ({ tag, todos }: Props) => {
    return (
        <div className="rounded-xl border dark:border-gray-700">
            <p className="flex items-center rounded-t-xl bg-gray-100 p-2 dark:bg-gray-900">
                <HiMiniHashtag /> {tag}
            </p>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodoGroup;
