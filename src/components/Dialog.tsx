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
                    className="bg-ctp-base text-ctp-base-text max-h-fit max-w-fit rounded-full px-4 py-2 font-extrabold"
                >
                    X
                </button>
                {children}
            </dialog>
            <button
                type="button"
                className="bg-ctp-surface-0 text-ctp-base-text ml-4 rounded-lg p-4 font-bold shadow-xl"
                onClick={() => dialogRef.current?.showModal()}
            >
                Luo Uusi
            </button>
        </>
    );
};

export default Dialog;
