import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaskTable from "@/components/TaskTable";
import TaskTableHeader from "@/components/TaskTableHeader";

export default async function Home() {
    return (
        <main className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="rounded-lg shadow-md m-10 p-10">
                    <TaskTableHeader />
                    <TaskTable />
                </div>
            </div>
        </main>
    );
}
