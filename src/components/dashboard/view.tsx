import { cn } from "~/lib/utils";

type DashboardDataViewProps = React.ComponentProps<"div">;

export function DashboardDataView({
  className,
  children,
}: DashboardDataViewProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-background p-8",
        className,
      )}
    >
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="z-0 flex w-full justify-center">{children}</div>
    </div>
  );
}
