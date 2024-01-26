import { Dispatch, RefObject, SetStateAction } from "react";
import Dialog from "./Dialog";

interface Props {
    categories: string[];
    setCategoryFilter: Dispatch<SetStateAction<string>>;
    sidebarRef: RefObject<HTMLDialogElement>;
}

const SideBar = ({ categories, setCategoryFilter, sidebarRef }: Props) => {
    return (
        <>
            <ul className="mt-8 hidden border-l border-gray-400 sm:block">
                <li className="px-2 pb-2">
                    <button
                        className="hover:underline"
                        onClick={() => setCategoryFilter("Kaikki tehtävät")}
                    >
                        Kaikki tehtävät
                    </button>
                </li>
                {categories.map((cat) => {
                    return (
                        <li key={cat} className="px-2 pb-2">
                            <button
                                className="hover:underline"
                                onClick={() => setCategoryFilter(cat)}
                            >
                                {cat}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Dialog dialogRef={sidebarRef}>
                <ul className="rounded-lg border border-gray-400">
                    <li className="rounded-t-lg p-2 hover:bg-gray-200">
                        <button
                            onClick={() => {
                                setCategoryFilter("Kaikki tehtävät");
                                sidebarRef.current?.close();
                            }}
                        >
                            Kaikki tehtävät
                        </button>
                    </li>
                    {categories.map((cat) => {
                        return (
                            <li
                                key={cat}
                                className="p-2 first:rounded-t-lg last:rounded-b-lg even:bg-gray-100 hover:bg-gray-200"
                            >
                                <button
                                    onClick={() => {
                                        setCategoryFilter(cat);
                                        sidebarRef.current?.close();
                                    }}
                                >
                                    {cat}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </Dialog>
        </>
    );
};

export default SideBar;
