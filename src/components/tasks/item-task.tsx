import { useTaskActions } from "@/hooks/use-task-action";
import type { Task } from "@/schemas/task.schema";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Props {
  task: Task;
}

const ItemTask = ({ task }: Props) => {
  const { deleteTask, toggleTaskCompletion } = useTaskActions();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await deleteTask(task.id);
      } catch (error) {
        console.error(error);
        toast.error("Error deleting task");
      }
    });
  };

  const handleToggleCompletion = async () => {
    startTransition(async () => {
      try {
        await toggleTaskCompletion(task.id);
      } catch (error) {
        console.error(error);
        toast.error("Error updating task");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={cn(
            "text-lg font-semibold",
            task.completed ? "line-through text-gray-500" : ""
          )}>
          {task.title}
        </CardTitle>
        <CardAction className="space-x-2">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={handleToggleCompletion}
            disabled={isPending}>
            Update
          </Button>
          <Button
            variant="destructive"
            className="cursor-pointer"
            onClick={handleDelete}
            disabled={isPending}>
            Delete
          </Button>
        </CardAction>
        {task.description && <CardContent>{task.description}</CardContent>}
      </CardHeader>
    </Card>
  );
};

export default ItemTask;
