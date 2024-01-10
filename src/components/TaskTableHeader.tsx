const TaskTableHeader = () => {
    return (
        <header>
            <ol className="grid grid-cols-5 border-b-2 mb-4">
                <div className="task-subgrid">
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
