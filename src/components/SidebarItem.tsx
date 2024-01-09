type Variant = "main" | "secondary";

interface Props {
    title: string;
    variant: Variant;
}

const SidebarItem = ({ title, variant }: Props) => {
    return (
        <div
            className={
                variant === "main"
                    ? "rounded-lg bg-slate-800 hover:bg-slate-600 shadow-md text-white p-2"
                    : "hover:bg-gray-200 hover:shadow-md p-2 rounded-lg"
            }
        >
            {title}
        </div>
    );
};

export default SidebarItem;
