"use client";

import { Todos } from "@prisma/client";
import TodoCategory from "./TodoCategory";
import NewTodoModal from "./NewTodoModal";

interface Props {
    todos: Todos[];
    categories: string[];
    categoryFilter: string;
}

const TodoTable = ({ todos, categories, categoryFilter }: Props) => {
    let todoCategories: any[] = [];

    categories.forEach((cat) => {
        if (categoryFilter === "Kaikki tehtävät" || cat === categoryFilter)
            todoCategories.push(
                <TodoCategory
                    key={cat}
                    category={cat}
                    todos={todos.filter((t) => {
                        return cat === t.course_name;
                    })}
                />,
            );
    });

    return (
        <div className="mt-8 grid max-w-screen-sm flex-1 gap-6">
            <NewTodoModal category={categoryFilter} />
            {todoCategories}
        </div>
    );
};

export default TodoTable;
