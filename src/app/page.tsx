import { tasks } from "~/config/constants";
import { TasksList } from "~/components/home/tasks-list";
import { Separator } from "~/components/ui/separator";
import { CardList } from "~/components/home/card-list";

export default function Home() {
  return (
    <section className="mx-auto h-full flex-1 space-y-8 px-6 py-4 font-mono">
      <div className="px-4 md:px-10">
        <CardList />
      </div>
      <Separator className="bg-muted/75" />
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-2xl font-bold capitalize">headline title</h1>
        <TasksList items={tasks} />
      </div>
    </section>
  );
}
