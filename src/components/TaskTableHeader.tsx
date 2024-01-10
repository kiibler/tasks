const TaskTableHeader = () => {
    return (
        <header>
            <ol className="mb-4 grid grid-cols-4 border-b-2 md:grid-cols-5">
                <div className="col-span-2 grid grid-cols-subgrid md:col-span-2">
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
