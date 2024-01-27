import { Dispatch, RefObject, SetStateAction } from "react";
import Dialog from "./Dialog";

interface Props {
    tags: string[];
    setTagFilter: Dispatch<SetStateAction<string>>;
    sidebarRef: RefObject<HTMLDialogElement>;
}

const SideBar = ({ tags, setTagFilter, sidebarRef }: Props) => {
    return (
        <>
            <ul className="mt-8 hidden border-l border-gray-400 sm:block dark:border-gray-600">
                <li className="px-2 pb-2">
                    <button
                        className="hover:underline"
                        onClick={() => setTagFilter("Kaikki tehtävät")}
                    >
                        Kaikki tehtävät
                    </button>
                </li>
                {tags.map((tag) => {
                    return (
                        <li key={tag} className="px-2 pb-2">
                            <button
                                className="hover:underline"
                                onClick={() => setTagFilter(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <Dialog dialogRef={sidebarRef}>
                <ul className="rounded-lg border border-gray-400 dark:border-gray-600">
                    <button
                        className="w-full rounded-t-lg p-2 text-left hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => {
                            setTagFilter("Kaikki tehtävät");
                            sidebarRef.current?.close();
                        }}
                    >
                        Kaikki tehtävät
                    </button>
                    {tags.map((tag) => {
                        return (
                            <button
                                key={tag}
                                className="block w-full p-2 text-left first:rounded-t-lg last:rounded-b-lg even:bg-gray-100 hover:bg-gray-200 dark:even:bg-gray-900 dark:hover:bg-gray-800"
                                onClick={() => {
                                    setTagFilter(tag);
                                    sidebarRef.current?.close();
                                }}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </ul>
            </Dialog>
        </>
    );
};

export default SideBar;
