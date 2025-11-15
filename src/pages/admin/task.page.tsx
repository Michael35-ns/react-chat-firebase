import FormTask from "@/components/tasks/form-task";
import ListTask from "@/components/tasks/list-task";
import { Suspense } from "react";

const TaskPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tasks</h1>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <FormTask />
        <ListTask />
      </Suspense>
    </div>
  );
};

export default TaskPage;
