import { DialogHTMLAttributes, RefObject } from "react";

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
    dialogRef: RefObject<HTMLDialogElement>;
}

const Dialog = ({ dialogRef, children, ...props }: Props) => {
    return (
        <>
            <dialog id="modal" ref={dialogRef} {...props}>
                <button
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    className="max-h-fit max-w-fit rounded-full bg-white px-4 py-2 font-extrabold"
                >
                    X
                </button>
                {children}
            </dialog>
            <button
                type="button"
                className="ml-4 rounded-lg bg-slate-800 p-4 font-bold text-white shadow-xl"
                onClick={() => dialogRef.current?.showModal()}
            >
                Luo Uusi
            </button>
        </>
    );
};

export default Dialog;
