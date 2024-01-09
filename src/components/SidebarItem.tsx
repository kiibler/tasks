const SidebarItem = ({ title }: { title: string }) => {
    return (
        <div className="rounded-lg box-border p-2 hover:bg-gray-200 hover:shadow-md">
            {title}
        </div>
    );
};

export default SidebarItem;
