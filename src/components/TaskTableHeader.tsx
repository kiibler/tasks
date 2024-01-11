const TaskTableHeader = () => {
    return (
        <header>
            <ol className="mb-4 flex border-b-2">
                <li className="max-w-10 flex-auto mx-2">Tila</li>
                <li className="flex-1">Tehtävä</li>
                <li className="hidden md:block md:flex-1">Tag</li>
                <li className="flex-1">Palautuspäivä</li>
            </ol>
        </header>
    );
};

export default TaskTableHeader;
