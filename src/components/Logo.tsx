import { Dispatch, SetStateAction } from "react";
import { LuListTodo } from "react-icons/lu";

interface Props {
    screenWidth: number;
    isSidebarVisible: boolean;
    setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

const Logo = ({
    screenWidth,
    isSidebarVisible,
    setIsSidebarVisible,
}: Props) => {
    const handleClick = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return screenWidth > 1024 ? (
        <div className="border-ctp-base-dark flex min-w-24 items-center justify-center border-r-2 md:min-w-40 lg:min-w-60">
            <LuListTodo size={60} />
        </div>
    ) : (
        <button
            className="border-ctp-base-dark flex min-w-24 items-center justify-center border-r-2 md:min-w-40 lg:min-w-60"
            onClick={handleClick}
        >
            <LuListTodo size={60} />
        </button>
    );
};

export default Logo;
