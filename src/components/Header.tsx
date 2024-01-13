import { getTime } from "@/lib/getTime";

interface Props {
    children: React.ReactNode;
}

const Header = ({ children }: Props) => {
    const today = new Date();

    return (
        <header className="flex border-b-2 border-gray-300 bg-gray-100 md:min-h-28">
            {children}
            <div className="flex flex-1 items-center justify-center border lg:justify-between">
                <h1 className="ml-10 hidden text-3xl lg:block">Todo App</h1>
                <h1 className="lg:mr-10">{`Tänään on ${getTime(today)}`}</h1>
            </div>
        </header>
    );
};

export default Header;
