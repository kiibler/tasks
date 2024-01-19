import { getTime } from "@/lib/getTime";
import { signOut } from "next-auth/react";

interface Props {
    children: React.ReactNode;
}

const Header = ({ children }: Props) => {
    const today = new Date();

    return (
        <header className="border-ctp-base-dark bg-ctp-surface-0 flex border-b-2 sm:min-h-28">
            {children}
            <div className="flex flex-1 items-center justify-end sm:justify-between">
                <div className="ml-10 hidden sm:block">
                    <h1 className="text-3xl">Todo App</h1>
                    <h1>{`Tänään on ${getTime(today)}`}</h1>
                </div>
                <button
                    className="bg-ctp-accent text-ctp-base-dark mr-10 rounded-xl p-2"
                    onClick={() => signOut()}
                >
                    Kirjaudu ulos
                </button>
            </div>
        </header>
    );
};

export default Header;
