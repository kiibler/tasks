import handleTask from "@/lib/handleTask";

const CreateTask = () => {
    return (
        <form
            className="box-border flex gap-2 rounded-lg border-2 border-slate-600 bg-slate-800/90 p-4 py-6 shadow-md"
            action={(form) => {
                handleTask(form);
                window.location.reload();
            }}
        >
            <input
                type="text"
                name="task_name"
                className="rounded-lg px-2"
                placeholder="Tehtävä"
                required
            />
            <input
                type="text"
                name="course_name"
                className="rounded-lg px-2"
                placeholder="Kurssi"
                required
            />
            <input
                type="datetime-local"
                name="due_date"
                className="rounded-lg px-2"
            />
            <button type="submit" className="rounded-lg bg-white px-2">
                Luo Uusi
            </button>
        </form>
    );
};

export default CreateTask;
