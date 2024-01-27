"use client";

import { Todos } from "@prisma/client";
import TodoGroup from "./TodoGroup";
import NewTodoModal from "./NewTodoModal";

interface Props {
    todos: Todos[];
    tags: string[];
    tagFilter: string;
}

const TodoTable = ({ todos, tags, tagFilter }: Props) => {
    let todoTags: any[] = [];

    tags.forEach((tag) => {
        if (tagFilter === "Kaikki tehtävät" || tag === tagFilter)
            todoTags.push(
                <TodoGroup
                    key={tag}
                    tag={tag}
                    todos={todos.filter((t) => {
                        return tag === t.tag;
                    })}
                />,
            );
    });

    return (
        <div className="my-8 grid max-w-screen-sm flex-1 gap-6">
            <NewTodoModal tag={tagFilter} />
            {todoTags}
        </div>
    );
};

export default TodoTable;
