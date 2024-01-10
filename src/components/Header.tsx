import getTime from "@/lib/getTime";

const Header = () => {
    const today = new Date();

    return (
        <header className="flex h-28 items-center justify-between border-b-2 border-gray-300 bg-gray-100 px-12">
            <h1 className="text-3xl">Kaikki tehtävät</h1>
            <h1>{`Tänään on ${getTime(today)}`}</h1>
        </header>
    );
};

export default Header;
