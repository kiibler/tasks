import CreateTask from "./CreateTask";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const items = ["Kaikki Tehtävät", "Fysiikka", "Ruotsi", "Itseopiskelu"];
    return (
        <div className="bg-gray-100/60 border-r-2 border-gray-300 flex-initial w-60 h-screen">
            <Logo />
            <nav className="grid gap-4 justify-center mt-10">
                <CreateTask />
                {items.map((item, index) => {
                    return <SidebarItem key={index} title={item} />;
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
