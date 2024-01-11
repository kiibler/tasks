import { LuListTodo } from "react-icons/lu";
import getTime from "@/lib/getTime";

const Header = () => {
    const today = new Date();

    return (
        <header className="flex md:min-h-28 border-b-2 border-gray-300 bg-gray-100">
            <div className="flex min-w-24 md:min-w-40 items-center justify-center border-r-2 border-gray-300 lg:min-w-60">
                <LuListTodo size={60} />
            </div>
            <div className="flex flex-1 items-center justify-center border lg:justify-between">
                <h1 className="ml-10 hidden text-3xl lg:block">Todo App</h1>
                <h1 className="lg:mr-10">{`Tänään on ${getTime(today)}`}</h1>
            </div>
        </header>
    );
};

export default Header;
