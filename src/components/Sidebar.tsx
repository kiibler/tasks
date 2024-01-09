import CreateTaskBtn from "./CreateTask";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const items = ["Fysiikka", "Ruotsi", "Itseopiskelu"];
    return (
        <div className="bg-accent border-r-2 border-accent_brdr flex-none w-60 min-h-screen">
            <Logo />
            <nav className="grid gap-4 justify-center mt-10">
                <SidebarItem title="Kaikki Tehtävät" variant="main" />
                {items.map((item, index) => {
                    return <SidebarItem key={index} title={item} variant="secondary" />;
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
