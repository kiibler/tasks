import CreateTask from "./CreateTask";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const items = ["Kaikki Tehtävät", "Fysiikka", "Ruotsi", "Itseopiskelu"];
    return (
        <div className="bg-accent border-r-2 border-accent_brdr flex-none w-60 h-screen">
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
