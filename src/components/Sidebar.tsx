"use client";

import { Dispatch, SetStateAction } from "react";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

interface Props {
    courses: string[];
    onCourseFilterChange: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ courses, onCourseFilterChange }: Props) => {
    return (
        <div className="bg-accent border-r-2 border-accent_brdr flex-none w-60 min-h-screen">
            <Logo />
            <nav className="grid gap-4 justify-center mt-10">
                <SidebarItem
                    title="Kaikki Tehtävät"
                    variant="main"
                    onCourseFilterChange={onCourseFilterChange}
                />
                {courses.map((course, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            title={course}
                            variant="secondary"
                            onCourseFilterChange={onCourseFilterChange}
                        />
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
