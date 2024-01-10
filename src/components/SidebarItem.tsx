"use client";

import { Dispatch, SetStateAction } from "react";

interface Props {
    title: string;
    courseFilter: string;
    onCourseFilterChange: Dispatch<SetStateAction<string>>;
}

const SidebarItem = ({ title, courseFilter, onCourseFilterChange }: Props) => {
    return (
        <button
            type="button"
            onClick={(e) => onCourseFilterChange(e.currentTarget.value)}
            value={title}
            className={
                courseFilter === title
                    ? "rounded-lg bg-slate-800 p-2 text-white shadow-md hover:bg-slate-600"
                    : "rounded-lg p-2 hover:bg-gray-200 hover:shadow-md"
            }
        >
            {title}
        </button>
    );
};

export default SidebarItem;
