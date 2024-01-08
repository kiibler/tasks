const handleTask = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    var due;
    if (data.get("due_date")) {
        due = new Date(data.get("due_date") as string).toISOString();
    } else {
        due = null;
    }

    const task = {
        task_name: data.get("task_name"),
        course_name: data.get("course_name"),
        due_date: due,
        finished: false,
    };

    await fetch("http://localhost:3000/api/create-task", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json",
        },
    });

    window.location.reload();
};

export default handleTask;
