"use client";

import { useState, useRef } from "react";

import { LuListTodo } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import Header from "@/components/Header";
import SideBar from "./SideBar";
import TodoTable from "@/components/TodoTable";

import { Todos } from "@prisma/client";
import { MdDarkMode } from "react-icons/md";

interface Props {
    todoRecords: Todos[];
}

const App = ({ todoRecords }: Props) => {
    const todoTags: string[] = [];
    todoRecords.forEach((todo) => {
        if (!todoTags.includes(todo.tag)) {
            todoTags.push(todo.tag);
        }
    });

    const [tagFilter, setTagFilter] = useState("Kaikki tehtävät");
    const sidebarRef = useRef<HTMLDialogElement>(null);

    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`${isDarkMode && "dark"}`}>
            <div className="min-h-screen dark:bg-gray-950 dark:text-gray-200">
                <Header>
                    <LuListTodo size={60} />
                    <div className="flex gap-8">
                        <button
                            className="rounded-lg border border-gray-400 bg-gray-100 p-2 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                        >
                            <MdDarkMode />
                        </button>
                        <button
                            className="block sm:hidden"
                            onClick={() => sidebarRef.current?.showModal()}
                        >
                            <HiMenu size={40} />
                        </button>
                    </div>
                </Header>
                <div className="mx-4 flex items-start justify-center gap-8">
                    <TodoTable
                        todos={todoRecords}
                        tags={todoTags}
                        tagFilter={tagFilter}
                    />
                    <SideBar
                        tags={todoTags}
                        setTagFilter={setTagFilter}
                        sidebarRef={sidebarRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
