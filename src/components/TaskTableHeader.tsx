const TaskTableHeader = () => {
    return (
        <header>
            <ol className="grid grid-cols-5 border-b-2 mb-4">
                <div className="grid grid-cols-subgrid col-span-3">
                    <li>Tila</li>
                    <li>Tehtävä</li>
                </div>
                <li>Kurssi</li>
                <li>Palautuspäivä</li>
            </ol>
        </header>
    );
};

export default TaskTableHeader;
