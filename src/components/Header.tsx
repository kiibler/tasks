import getTime from "@/lib/getTime";

const Header = () => {
    const today = new Date();

    return (
        <header className="bg-accent border-b-2 border-accent_brdr h-28 px-12 flex justify-between items-center">
            <h1 className="text-3xl">Kaikki tehtävät</h1>
            <h1>{`Tänään on ${getTime(today)}`}</h1>
        </header>
    );
};

export default Header;
