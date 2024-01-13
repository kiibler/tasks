import { Dispatch, SetStateAction } from "react";
import SidebarItem from "./SidebarItem";

interface Props {
    courses: string[];
    courseFilter: string;
    onCourseFilterChange: Dispatch<SetStateAction<string>>;
    isSidebarVisible: boolean;
}

const Sidebar = ({
    courses,
    courseFilter,
    onCourseFilterChange,
    isSidebarVisible,
}: Props) => {
    return (
        <div
            className={`${
                isSidebarVisible ? "absolute" : "hidden"
            } min-h-screen max-w-60 border-r-2 border-gray-300 bg-gray-100 lg:static lg:block`}
        >
            <nav className="grid justify-center gap-4 px-8 pt-10">
                <SidebarItem
                    title="Kaikki Tehtävät"
                    courseFilter={courseFilter}
                    onCourseFilterChange={onCourseFilterChange}
                />
                {courses.map((course, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            title={course}
                            courseFilter={courseFilter}
                            onCourseFilterChange={onCourseFilterChange}
                        />
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
