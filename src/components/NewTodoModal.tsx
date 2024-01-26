import Dialog from "./Dialog";

import { createNewTodo } from "@/lib/todoActions";
import { useRef } from "react";

interface Props {
    category: string;
}

const NewTodoModal = ({ category }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <>
            <Dialog dialogRef={dialogRef}>
                <form
                    className="grid gap-4"
                    ref={formRef}
                    action={(form) => {
                        createNewTodo(form);
                        formRef.current?.reset();
                    }}
                >
                    <input
                        className="block rounded-lg border p-2 dark:border-gray-800 dark:bg-gray-600"
                        type="text"
                        id="todo"
                        name="todo"
                        placeholder="Todo.."
                        required
                    />
                    <input
                        className="block rounded-lg border p-2 dark:border-gray-800 dark:bg-gray-600"
                        type="text"
                        id="tag"
                        name="tag"
                        placeholder="Tag.."
                        required
                    />
                    <button
                        className="rounded-lg border bg-gray-800 p-2 text-white dark:border-gray-700 dark:bg-gray-900"
                        type="submit"
                        onClick={() => {
                            dialogRef.current?.close();
                        }}
                    >
                        Luo uusi
                    </button>
                </form>
            </Dialog>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl">{category}</h3>
                <button
                    className="rounded-lg border bg-gray-900 p-2 text-white dark:border-gray-600"
                    onClick={() => dialogRef.current?.showModal()}
                >
                    Luo uusi
                </button>
            </div>
        </>
    );
};

export default NewTodoModal;
