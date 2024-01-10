const TaskTableHeader = () => {
    return (
        <header>
            <ol className="mb-4 grid grid-cols-5 border-b-2">
                <div className="grid grid-cols-subgrid col-span-3">
                    <li>Tila</li>
                    <li>Tehtävä</li>
                </div>
                <li>Tag</li>
                <li>Palautuspäivä</li>
            </ol>
        </header>
    );
};

export default TaskTableHeader;
