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
            className={`${
                courseFilter === title
                    ? "bg-ctp-base-text text-ctp-base-dark"
                    : "hover:underline"
            } rounded-lg p-2`}
        >
            {title}
        </button>
    );
};

export default SidebarItem;
