const TaskTableHeader = () => {
    return (
        <header>
            <ol className="border-ctp-base-dark mb-6 flex border-b-2">
                <li className="mx-2 max-w-10 flex-auto">Tila</li>
                <li className="flex-1">Tehtävä</li>
                <li className="hidden sm:block sm:flex-1">Tag</li>
                <li className="flex-1">Palautuspäivä</li>
            </ol>
        </header>
    );
};

export default TaskTableHeader;
