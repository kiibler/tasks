import getTime from "@/lib/getTime";

const Header = () => {
    const today = new Date();

    return (
        <header className="bg-slate-800 box-border h-20 px-12 flex justify-between items-center text-white">
            <h1 className="text-3xl">Tehtävät</h1>
            <h1>{`Tänään on ${getTime(today)}`}</h1>
        </header>
    );
};

export default Header;
