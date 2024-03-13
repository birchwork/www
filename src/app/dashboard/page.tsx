import { Twitter } from "lucide-react";
import { DashboardData } from "~/components/dashboard/data";
import { Meteors } from "~/components/dashboard/meteors";
import { DashboardDataView } from "~/components/dashboard/view";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";

export default function DashBoardPage() {
  return (
    <section className="mx-auto h-full flex-1 space-y-8 px-6 py-4 font-mono">
      <div className=" relative ">
        <Meteors number={30} />
      </div>
      <div className="flex flex-col items-center space-y-6 justify-between px-4 md:px-10 xl:flex-row">
        <div className="flex items-center space-x-6">
          <Avatar className="h-32 w-32 shadow-md">
            <AvatarImage src={`/avatars/05.png`} />
            <AvatarFallback>Team</AvatarFallback>
          </Avatar>
          <div className="grid grid-cols-2 items-center gap-x-16 gap-y-8 p-4">
            <div className="z-10">
              <div className="text-sm font-medium capitalize leading-none tracking-tight">
                title
              </div>
              <span className="text-lg text-muted-foreground">akjnaknckan</span>
            </div>
            <div className="z-10">
              <div className="text-sm font-medium capitalize leading-none tracking-tight">
                title
              </div>
              <span className="text-lg text-muted-foreground">akjnaknckan</span>
            </div>
            <div className="z-10">
              <div className="text-sm font-medium capitalize leading-none tracking-tight">
                title
              </div>
              <span className="text-lg text-muted-foreground">akjnaknckan</span>
            </div>
            <div className="z-10">
              <div className="flex items-center gap-1 font-bold [&>svg]:size-4 [&>svg]:md:size-6">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2.5">
          <DashboardData />
          <DashboardDataView>
            <div className="w-96">DashboardDataView...</div>
          </DashboardDataView>
        </div>
      </div>
      <Separator className="bg-muted/75" />
    </section>
  );
}
