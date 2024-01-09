import getTime from "@/lib/getTime";

const Header = () => {
    const today = new Date();

    return (
        <header className="bg-gray-100/60 border-b-2 border-gray-300 h-28 px-12 flex justify-between items-center">
            <h1 className="text-3xl">Kaikki tehtävät</h1>
            <h1>{`Tänään on ${getTime(today)}`}</h1>
        </header>
    );
};

export default Header;
