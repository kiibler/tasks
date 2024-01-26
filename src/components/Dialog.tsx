import { IoCloseOutline } from "react-icons/io5";
import { RefObject } from "react";

interface Props {
    dialogRef: RefObject<HTMLDialogElement>;
    children?: React.ReactNode;
}

const Dialog = ({ dialogRef, children }: Props) => {
    return (
        <dialog
            ref={dialogRef}
            className="open:grid open:gap-4 open:rounded-lg open:p-4"
        >
            <button
                className="w-fit rounded-lg border bg-gray-100 p-2 hover:bg-gray-200"
                onClick={() => dialogRef.current?.close()}
            >
                <IoCloseOutline />
            </button>
            {children}
        </dialog>
    );
};

export default Dialog;
