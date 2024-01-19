"use client";

import { handleTask } from "@/lib/handleTask";
import { FormHTMLAttributes, useRef, useEffect, RefObject } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="bg-ctp-base text-ctp-base-text rounded-lg p-2"
            aria-disabled={pending}
        >
            Luo Uusi
        </button>
    );
};

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    dialogRef: RefObject<HTMLDialogElement>;
}

const CreateTask = ({ dialogRef, ...props }: Props) => {
    const initialState = { message: "" };
    const [state, formAction] = useFormState(handleTask, initialState);

    const formRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        // clear form input fields when form state changes
        formRef.current?.reset();
    }, [state.message]);

    return (
        <form
            {...props}
            ref={formRef}
            action={(form) => {
                formAction(form);
                dialogRef.current?.close();
            }}
        >
            <input
                type="text"
                name="task_name"
                className="bg-ctp-base-text text-ctp-base-dark rounded-lg p-2"
                placeholder="Tehtävä"
                required
            />
            <input
                type="text"
                name="course_name"
                className="bg-ctp-base-text text-ctp-base-dark rounded-lg p-2"
                placeholder="Kurssi"
                required
            />
            <input
                type="datetime-local"
                name="due_date"
                className="bg-ctp-base-text text-ctp-base-dark rounded-lg p-2"
            />
            <SubmitButton />
        </form>
    );
};

export default CreateTask;
