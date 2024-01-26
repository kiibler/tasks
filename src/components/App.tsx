"use client";

import { useState, useRef } from "react";

import { LuListTodo } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Header from "@/components/Header";
import SideBar from "./SideBar";
import TodoTable from "@/components/TodoTable";

import { Todos } from "@prisma/client";

interface Props {
    todoRecords: Todos[];
}

const App = ({ todoRecords }: Props) => {
    const todoCategories: string[] = [];
    todoRecords.forEach((todo) => {
        if (!todoCategories.includes(todo.course_name)) {
            todoCategories.push(todo.course_name);
        }
    });

    const [categoryFilter, setCategoryFilter] = useState("Kaikki tehtävät");
    const sidebarRef = useRef<HTMLDialogElement>(null);

    return (
        <div>
            <Header>
                <LuListTodo size={60} />
                <button
                    className="block sm:hidden"
                    onClick={() => sidebarRef.current?.showModal()}
                >
                    <HiMenu size={40} />
                </button>
            </Header>
            <div className="mx-4 flex items-start justify-center gap-8">
                <TodoTable
                    todos={todoRecords}
                    categories={todoCategories}
                    categoryFilter={categoryFilter}
                />
                <SideBar
                    categories={todoCategories}
                    setCategoryFilter={setCategoryFilter}
                    sidebarRef={sidebarRef}
                />
            </div>
        </div>
    );
};

export default App;
