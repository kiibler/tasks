"use client";

import { LuListTodo } from "react-icons/lu";
import getTime from "@/lib/getTime";
import { Dispatch, SetStateAction } from "react";

interface Props {
    screenWidth: number;
    isSidebarVisible: boolean;
    setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

const Header = ({
    screenWidth,
    isSidebarVisible,
    setIsSidebarVisible,
}: Props) => {
    const today = new Date();

    const handleClick = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    // headerLogo will be a normal div on screens bigger than 1024px
    // on smaller screens, it will be a button which toggles the sidebar
    const headerLogo =
        screenWidth > 1024 ? (
            <div className="flex min-w-24 items-center justify-center border-r-2 border-gray-300 md:min-w-40 lg:min-w-60">
                <LuListTodo size={60} />
            </div>
        ) : (
            <button
                className="flex min-w-24 items-center justify-center border-r-2 border-gray-300 md:min-w-40 lg:min-w-60"
                onClick={handleClick}
            >
                <LuListTodo size={60} />
            </button>
        );

    return (
        <header className="flex border-b-2 border-gray-300 bg-gray-100 md:min-h-28">
            {headerLogo}
            <div className="flex flex-1 items-center justify-center border lg:justify-between">
                <h1 className="ml-10 hidden text-3xl lg:block">Todo App</h1>
                <h1 className="lg:mr-10">{`Tänään on ${getTime(today)}`}</h1>
            </div>
        </header>
    );
};

export default Header;
