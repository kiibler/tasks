"use client";

import { Dispatch, SetStateAction } from "react";

type Variant = "main" | "secondary";

interface Props {
    title: string;
    variant: Variant;
    onCourseFilterChange: Dispatch<SetStateAction<string>>;
}

const SidebarItem = ({ title, variant, onCourseFilterChange }: Props) => {
    return (
        <button
            type="button"
            onClick={(e) => {onCourseFilterChange(e.currentTarget.value); console.log(e.currentTarget.value)}}
            value={title}
            className={
                variant === "main"
                    ? "rounded-lg bg-slate-800 hover:bg-slate-600 shadow-md text-white p-2"
                    : "hover:bg-gray-200 hover:shadow-md p-2 rounded-lg"
            }
        >
            {title}
        </button>
    );
};

export default SidebarItem;
