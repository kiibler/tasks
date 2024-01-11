const TaskTableHeader = () => {
    return (
        <header>
            <ol className="mb-4 grid grid-cols-3 border-b-2 md:grid-cols-5">
                <div className="col-span-2 grid grid-cols-subgrid md:col-span-3">
                    <li>Tila</li>
                    <li>Tehtävä</li>
                </div>
                <li className="hidden md:block">Tag</li>
                <li>Palautuspäivä</li>
            </ol>
        </header>
    );
};

export default TaskTableHeader;
